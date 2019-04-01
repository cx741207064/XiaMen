using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace JlueTaxSystemXiaMenBS.Models
{
    public class FjsData
    {
        public Guid guid { get; set; }

        /// <summary>
        /// 索引
        /// </summary>
        public int index { get; set; }

        /// <summary>
        /// 征收项目
        /// </summary>
        public string zsxm { get; set; }

        /// <summary>
        /// 征收品目代码
        /// </summary>
        [Required]
        [Display(Name = "zspm")]
        public string zspm { get; set; }

        /// <summary>
        /// 征收品目名称
        /// </summary>
        public string zspmMc { get; set; }

        /// <summary>
        /// 税款所属期起
        /// </summary>
        public string skssqq { get; set; }

        /// <summary>
        /// 税款所属期止
        /// </summary>
        public string skssqz { get; set; }

        /// <summary>
        /// 一般增值税
        /// </summary>
        public string ybzzs { get; set; }

        /// <summary>
        /// 免抵税额
        /// </summary>
        public decimal mdse { get; set; }

        /// <summary>
        /// 合计
        /// </summary>
        public string hj { get; set; }

        /// <summary>
        /// 税率
        /// </summary>
        public string sl { get; set; }

        /// <summary>
        /// 本期应纳税额
        /// </summary>
        public decimal bqynse { get; set; }

        /// <summary>
        /// 减免额
        /// </summary>
        public decimal jme { get; set; }

        /// <summary>
        /// 减免性质代码
        /// </summary>
        public string jmxzdm { get; set; }

        /// <summary>
        /// 本期已缴税额
        /// </summary>
        public decimal bqyjse { get; set; }

        /// <summary>
        /// 教育费附加已缴税额
        /// </summary>
        public decimal jyffjyjse { get; set; }

        /// <summary>
        /// 地方附加已缴税额
        /// </summary>
        public decimal dffjyjse { get; set; }

        /// <summary>
        /// 本期应补退税额
        /// </summary>
        public decimal bqybtse { get; set; }

        /// <summary>
        /// 销售合计数
        /// </summary>
        public string xshjs { get; set; }

        public string zzsxselx_dm { get; set; }

        public string zzsxselx_mc { get; set; }

        public Nsrxx Nsrxx { get; set; }

        public GDTXDate GDTXDate { get; set; }

        public OP OP { get; set; }

        /// <summary>
        /// 本期应纳税额(教育附加)
        /// </summary>
        public decimal bqynse1 { get; set; }

        /// <summary>
        /// 本期应纳税额(地方教育附加)
        /// </summary>
        public decimal bqynse2 { get; set; }

        /// <summary>
        /// 本期应补退税额(教育附加)
        /// </summary>
        public decimal bqybtse1 { get; set; }
        /// <summary>
        /// 本期应补退税额(地方教育附加)
        /// </summary>
        public decimal bqybtse2 { get; set; }

    }
}