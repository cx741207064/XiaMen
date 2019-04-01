using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace JlueTaxSystemXiaMenBS.Models
{
    public class YhsData
    {
        public Guid guid { get; set; }

        /// <summary>
        /// 索引
        /// </summary>
        public int index { get; set; }

        /// <summary>
        /// 税种
        /// </summary>
        public string sfz { get; set; }

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
        /// 应入库税额
        /// </summary>
        public string yrksfe { get; set; }

        /// <summary>
        /// 计税依据
        /// </summary>
        public string jsyj { get; set; }

        /// <summary>
        /// 核定比例
        /// </summary>
        public string hdbl { get; set; }

        /// <summary>
        /// 计税金额
        /// </summary>
        [Required]
        [Range(0,999)]
        [Display(Name="jsje")]
        public string jsje { get; set; }

        /// <summary>
        /// 税率
        /// </summary>
        public string sfl { get; set; }

        /// <summary>
        /// 应纳税额
        /// </summary>
        public string ynsfe { get; set; }

        /// <summary>
        /// 备案减免税额
        /// </summary>
        public string bajmsfe { get; set; }

        /// <summary>
        /// 备案事项代码
        /// </summary>
        public string basxdm { get; set; }

        /// <summary>
        /// 本期已缴税额
        /// </summary>
        public string bqyjse { get; set; }
    }
}