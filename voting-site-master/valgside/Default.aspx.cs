using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Microsoft.Ajax.Utilities;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Web.Services;
using System.Web.UI.HtmlControls;
using System.Xml.Linq;
using Antlr.Runtime;

namespace valgside
{
    public partial class Default : Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            errorMsg.Style.Add("color", "#000030");
            errorMsg.InnerHtml = "Velg et parti fra Linja Under";

            if (!IsPostBack) {
                getFromKommuner();
                getFromPerson();
            }
        }
        private static bool FnumIsValid(List<byte> fnum)
        {
            byte[] check1 = { 3, 7, 6, 1, 8, 9, 4, 5, 2, 1, 0 };
            byte[] check2 = { 5, 4, 3, 2, 7, 6, 5, 4, 3, 2, 1 };

            byte checksum1 = 0;
            byte checksum2 = 0;

            for (byte i = 0; i < fnum.Count; i++)
            {
                checksum1 += (byte)(fnum[i] * check1[i]);
                checksum2 += (byte)(fnum[i] * check2[i]);
            }

            return CleanDiv(checksum1) && CleanDiv(checksum2);
        }
        private static bool CheckAge(List<byte> fnum)
        {
            if (fnum[6] < 5)
                return true;

            if (int.Parse("20"+fnum[4].ToString() + fnum[5].ToString()) > DateTime.Now.Year - 18)
                return false;
            else if (int.Parse("20" + fnum[4].ToString() + fnum[5].ToString()) == DateTime.Now.Year - 18)
            {
                if (int.Parse(fnum[2].ToString() + fnum[3].ToString()) >= DateTime.Now.Month)
                {
                    if (int.Parse(fnum[0].ToString() + fnum[1].ToString()) >= DateTime.Now.Day)
                        return false;
                }
            }
            return true;
        }
        private static bool CleanDiv(byte n1)
        {
            return (float)n1 / 11 == n1 / 11;
        }
        private void getFromKommuner()
        {
            var connString = ConfigurationManager.ConnectionStrings["ConnCms"].ConnectionString;
            DataTable dt = new DataTable();
            using (SqlConnection conn = new SqlConnection(connString))
            {
                conn.Open();
                SqlCommand cmd = new SqlCommand("SELECT * from kommuner order by KNavn", conn);
                cmd.CommandType = CommandType.Text;
                SqlDataReader reader = cmd.ExecuteReader();
                dt.Load(reader);
                reader.Close();
                conn.Close();
            }

            foreach (DataRow row in dt.Rows)
            {
                ListItem item = new ListItem(row["KNavn"].ToString(), row["KID"].ToString());
                DropDownListKommuner.Items.Add(item);
            }

            DropDownListKommuner.DataBind();
        }
        private void getFromPerson()
        {
            var connString = ConfigurationManager.ConnectionStrings["ConnCms"].ConnectionString;
            DataTable dt = new DataTable();
            using (SqlConnection conn = new SqlConnection(connString))
            {
                conn.Open();
                SqlCommand cmd = new SqlCommand("SELECT * from person", conn);
                cmd.CommandType = CommandType.Text;
                SqlDataReader reader = cmd.ExecuteReader();
                dt.Load(reader);
                reader.Close();
                conn.Close();
            }

            foreach (DataRow row in dt.Rows)
            {
                ListItem item = new ListItem(row["pNr"].ToString());
                DBpNrLst.Items.Add(item);
            }

            DBpNrLst.DataBind();
        }
        protected void VoteBot(object sender, EventArgs e)
        {
            if (VoteBotInput.Text == "") return;
            int length = int.Parse(VoteBotInput.Text);

            var connectionString = ConfigurationManager.ConnectionStrings["connCms"].ConnectionString;
            if (length <= 0)
            {
                using (SqlConnection conn = new SqlConnection(connectionString))
                {
                    conn.Open();

                    SqlCommand cmd = new SqlCommand("TRUNCATE TABLE stemmer;", conn);
                    cmd.CommandType = CommandType.Text;

                    cmd.ExecuteNonQuery();
                    conn.Close();
                }
                return;
            }

            Random rnd = new Random();

            List<int> partyUsed = new List<int>();

            int partyAmount = length > 18 ? rnd.Next(3, 19) : rnd.Next(1, length);


            for (int i = 1; i <= partyAmount; i++)
            {
                int currentParty = rnd.Next(1, 19);
                foreach (var party in partyUsed)
                    while (party == currentParty)
                        currentParty = rnd.Next(1, 19);

                partyUsed.Add(currentParty);

                int votelength = rnd.Next(1, length > 1 ? rnd.Next(1, length / 2) : 1);
                for (int x = 0; x <= votelength; x++)
                {
                    using (SqlConnection conn = new SqlConnection(connectionString))
                    {
                        conn.Open();

                        SqlCommand cmd = new SqlCommand("INSERT INTO stemmer (kId,pId) Values(@kid,@pid)", conn);
                        cmd.CommandType = CommandType.Text;

                        var param = new SqlParameter("@kid", SqlDbType.Int);
                        param.Value = rnd.Next(1, 357);
                        cmd.Parameters.Add(param);

                        param = new SqlParameter("@pid", SqlDbType.Int);
                        param.Value = currentParty;
                        cmd.Parameters.Add(param);

                        cmd.ExecuteNonQuery();
                        conn.Close();
                    }
                }
            }
        }
        protected void Vote(object sender, EventArgs e)
        {
            List<byte> pNrAr = new List<byte>();

            string pNrStr = pNr.Value;
            pNr.Value = "";

            foreach (var b in pNrStr) {
                if (byte.TryParse(b.ToString(), out var result)) { 
                    pNrAr.Add(result);
                }
            }

            if (!(sender is Button button)) return;
            if (pNrStr.ToString() == "") return;
            if (int.Parse(DropDownListKommuner.SelectedValue) == 0) {
                errorMsg.Style.Add("color", "red");
                errorMsg.InnerHtml = Server.HtmlEncode("Du må velge kommune for å stemme.");
                return;
            } if (pNrStr.Length != 11) {
                errorMsg.Style.Add("color", "red");
                errorMsg.InnerHtml = Server.HtmlEncode("Ditt Fødselsnummer er for Kort.");
                return;
            } if (!CheckAge(pNrAr)) {
                errorMsg.Style.Add("color", "red");
                errorMsg.InnerHtml = Server.HtmlEncode("Du er for ung for å stemme.");
                return;
            } if (!FnumIsValid(pNrAr)) {
                errorMsg.Style.Add("color", "red");
                errorMsg.InnerHtml = Server.HtmlEncode("Ditt Fødselsnummer er ikke valid.");
                return;
            } for (int i = 0; i < DBpNrLst.Items.Count; i++) {
                string selectedpnr = DBpNrLst.Items[i].ToString();
                if (selectedpnr.Contains(pNrStr.ToString())) {
                    errorMsg.Style.Add("color", "red");
                    errorMsg.InnerHtml = Server.HtmlEncode("Dette Fødselsnummeret har allerede stemt.");
                    return;
                }
            }

            string id = button.Attributes["data-id"];

            SqlParameter param;
            var connectionString = ConfigurationManager.ConnectionStrings["connCms"].ConnectionString;
            using (SqlConnection conn = new SqlConnection(connectionString))
            {
                conn.Open();

                SqlCommand cmd1 = new SqlCommand("INSERT INTO person (pNr) Values(@pNr)", conn);
                cmd1.CommandType = CommandType.Text;

                param = new SqlParameter("@pNr", SqlDbType.Char);
                param.Value = pNrStr.ToString();
                cmd1.Parameters.Add(param);

                cmd1.ExecuteNonQuery();

                SqlCommand cmd2 = new SqlCommand("INSERT INTO stemmer (kId,pId) Values(@kid,@pid)", conn);
                cmd2.CommandType = CommandType.Text;

                param = new SqlParameter("@kid", SqlDbType.Int);
                param.Value = int.Parse(DropDownListKommuner.SelectedValue);
                cmd2.Parameters.Add(param);

                param = new SqlParameter("@pid", SqlDbType.Int);
                param.Value = int.Parse(id);
                cmd2.Parameters.Add(param);

                cmd2.ExecuteNonQuery();
                conn.Close();

            }

            errorMsg.Style.Add("color", "green");
            errorMsg.InnerHtml = Server.HtmlEncode("Takk for din stemme!");
            Response.Redirect(Request.RawUrl);
        }
    }
}