using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.DynamicData;
using System.Web.UI.HtmlControls;
using System.Text;
using System.Security.Cryptography;
using System.Text.RegularExpressions;
using System.Security.Principal;

namespace resultatside
{
    public partial class Results : Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            //const string script = @"
            //    document.addEventListener('DOMContentLoaded', () => {
            //        console.log`uwu`;
            //        loadPartier()
            //    });
            //";
            //ScriptManager.RegisterStartupScript(this, GetType(), "callFunctions", script, true);
            if (!IsPostBack)
            {
                getFromKommuner();
                getFromStemmer();
            }
        }

        private void getFromKommuner()
        {
            var connString = ConfigurationManager.ConnectionStrings["ConnCms"].ConnectionString;
            DataTable dt = new DataTable();
            using (SqlConnection conn = new SqlConnection(connString))
            {
                conn.Open();
                SqlCommand cmd = new SqlCommand("SELECT DISTINCT k.kid, k.kNavn FROM kommuner k JOIN stemmer s ON k.kId = s.kId;", conn);
                cmd.CommandType = CommandType.Text;
                SqlDataReader reader = cmd.ExecuteReader();
                dt.Load(reader);
                reader.Close();
                conn.Close();
            }

            foreach (DataRow row in dt.Rows)
            {
                ListItem item = new ListItem(row["kNavn"].ToString(), row["kId"].ToString());
                item.Value = row["kId"].ToString();
                DropDownListKommunerResults.Items.Add(item);
            }

            DropDownListKommunerResults.DataBind();
        }
        private void getFromStemmer()
        {
            string selectedvalue = DropDownListKommunerResults.SelectedValue.ToString();
            var connString = ConfigurationManager.ConnectionStrings["ConnCms"].ConnectionString;
            DataTable dt = new DataTable();
            using (SqlConnection conn = new SqlConnection(connString))
            {
                conn.Open();
                var queryStart = "SELECT partier.pId, partier.pNavn, partier.pKNavn ,COUNT(partier.pId) as amount FROM stemmer, partier WHERE partier.pId = stemmer.pId ";
                var queryEnd = (selectedvalue != "0")
                    ? "and kId = " + selectedvalue + " GROUP BY partier.pId, partier.pNavn, partier.pKNavn order by amount desc"
                    : "GROUP BY partier.pId, partier.pNavn, partier.pKNavn order by amount desc";
                var query = queryStart + queryEnd;
                SqlCommand cmd = new SqlCommand(query, conn);
                cmd.CommandType = CommandType.Text;
                SqlDataReader reader = cmd.ExecuteReader();
                dt.Load(reader);
                reader.Close();
                conn.Close();
            }

            foreach (DataRow row in dt.Rows)
            {
                HtmlTableRow htmlRow = new HtmlTableRow();

                foreach (DataColumn column in dt.Columns)
                {
                    HtmlTableCell htmlCell = new HtmlTableCell();
                    htmlCell.InnerText = row[column.ColumnName].ToString();

                    htmlRow.Cells.Add(htmlCell);
                }

                invisListStemmer.Rows.Add(htmlRow);
            }
        }
        protected void getFromStemmerBtn(object sender, EventArgs e) { getFromStemmer(); }
    }
}