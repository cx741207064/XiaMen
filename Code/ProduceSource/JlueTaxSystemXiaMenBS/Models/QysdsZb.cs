using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace JlueTaxSystemXiaMenBS.Models
{
    public class QysdsZb
    {
        /// <summary>
        /// 利润总额
        /// </summary>
        public decimal LJ_LRZE_TZQ { get; set; }

        /// <summary>
        /// 加：特定业务计算的应纳税所得额
        /// </summary>
        public decimal LJ_TDYWJSYNSSDE { get; set; }

        /// <summary>
        /// 减：不征税收入
        /// </summary>
        public decimal LJ_BZSSR { get; set; }

        /// <summary>
        /// 减:免税收入、减计收入、所得减免等优惠金额
        /// </summary>
        public decimal LJ_MSSRJSSRSDJMDYHJE { get; set; }

        /// <summary>
        /// 减：固定资产加速折旧（扣除）调减额
        /// </summary>
        public decimal LJ_GDZCJSZJTJE { get; set; }

        /// <summary>
        /// 减：弥补以前年度亏损
        /// </summary>
        public decimal LJ_NBYQNDKS { get; set; }

        /// <summary>
        /// 实际利润额
        /// </summary>
        public decimal LJ_LRZE { get; set; }

        /// <summary>
        /// 税率
        /// </summary>
        public decimal LJ_SYSL { get { return .25M; } }

        /// <summary>
        /// 应纳所得税额
        /// </summary>
        public decimal LJ_YNSDSE { get; set; }

        /// <summary>
        /// 减:减免所得税额
        /// </summary>
        public decimal LJ_JMSDSE { get; set; }

        /// <summary>
        /// 减：实际已预缴所得税额
        /// </summary>
        public decimal LJ_SJYJNSDSE { get; set; }

        /// <summary>
        /// 减：特定业务预缴（征）所得税额
        /// </summary>
        public decimal LJ_TDYWYJSDSE { get; set; }

        /// <summary>
        /// 应补（退）所得税额
        /// </summary>
        public decimal LJ_YBTSDSE_TZQ { get; set; }

        /// <summary>
        /// 是否属于小型微利企业
        /// </summary>
        public string SFXWQY_BZ { get; set; }

        /// <summary>
        /// 营业收入
        /// </summary>
        public decimal LJ_XSYYJE { get; set; }

        /// <summary>
        /// 营业成本
        /// </summary>
        public decimal LJ_YYCB { get; set; }

        /// <summary>
        /// 科技型中小企业
        /// </summary>
        public string SFKJXZXQYBZ { get; set; }

        /// <summary>
        /// 技术入股递延纳税事项
        /// </summary>
        public string SFFSJSRGDYNSSXBZ { get; set; }

        /// <summary>
        /// 国家限制或禁止行业
        /// </summary>
        public string SFGJXZHJZHY { get { return "N"; } }

        /// <summary>
        /// 季初从业人数
        /// </summary>
        public string JCCYRS { get; set; }

        /// <summary>
        /// 季末从业人数
        /// </summary>
        public string JMCYRS { get; set; }

        /// <summary>
        /// 季初资产总额
        /// </summary>
        public decimal JCZZZE { get; set; }

        /// <summary>
        /// 季末资产总额
        /// </summary>
        public decimal JMZZZE { get; set; }

    }
}