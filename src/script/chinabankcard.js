/**
 * Created by jiahuijie on 16/8/5.
 */
(function ($) {

    var banks = {
        '622525': {bankName: '深圳发展银行', cardName: '人民币信用卡金卡', cardType: '贷记卡', cardNoLength: 16, govNo: '03070000'},
        '622526': {bankName: '深圳发展银行', cardName: '人民币信用卡普卡', cardType: '贷记卡', cardNoLength: 16, govNo: '03070000'},
        '622538' : {bankName: '深圳发展银行', cardName:'发展卡', cardType: '借记卡', cardNoLength: 16, govNo: '03070010'},
        '622546' : {bankName: '大丰银行有限公司', cardName:'人民币借记卡', cardType: '借记卡', cardNoLength: 19, govNo: '25250446'},
        '622547' : {bankName: '大丰银行有限公司', cardName:'港币借记卡', cardType: '借记卡', cardNoLength: 19, govNo: '25250446'},
        '622548' : {bankName: '大丰银行有限公司', cardName:'澳门币借记卡', cardType: '借记卡', cardNoLength: 19, govNo: '25250446'},
        '622549' : {bankName: '哈萨克斯坦国民储蓄银行', cardName:'Halykbank Classic', cardType: '借记卡', cardNoLength: 16, govNo: '26330398'},
        '622550' : {bankName: '哈萨克斯坦国民储蓄银行', cardName:'Halykbank Golden', cardType: '借记卡', cardNoLength: 16, govNo: '26330398'},
        '622561' : {bankName: '德阳市商业银行', cardName:'锦程卡定活一卡通白金卡', cardType: '借记卡', cardNoLength: 19, govNo: '04986580'},
        '622562' : {bankName: '德阳市商业银行', cardName:'锦程卡定活一卡通金卡', cardType: '借记卡', cardNoLength: 19, govNo: '04986580'},
        '622563' : {bankName: '德阳市商业银行', cardName:'锦程卡定活一卡通', cardType: '借记卡', cardNoLength: 19, govNo: '04986580'},
        '622575' : {bankName: '招商银行', cardName:'招商银行信用卡', cardType: '贷记卡', cardNoLength: 16, govNo: '03080000'},
        '622576' : {bankName: '招商银行', cardName:'招商银行信用卡', cardType: '贷记卡', cardNoLength: 16, govNo: '03080000'},
        '622577' : {bankName: '招商银行', cardName:'招商银行信用卡', cardType: '贷记卡', cardNoLength: 16, govNo: '03080000'},
        '622578' : {bankName: '招商银行', cardName:'招商银行信用卡', cardType: '贷记卡', cardNoLength: 16, govNo: '03080000'},
        '622579' : {bankName: '招商银行', cardName:'招商银行信用卡', cardType: '贷记卡', cardNoLength: 16, govNo: '03080000'},
        '622580' : {bankName: '招商银行', cardName:'一卡通', cardType: '借记卡', cardNoLength: 16, govNo: '03080000'},
        '622581' : {bankName: '招商银行', cardName:'招商银行信用卡', cardType: '贷记卡', cardNoLength: 16, govNo: '03080000'},
        '622582' : {bankName: '招商银行', cardName:'招商银行信用卡', cardType: '贷记卡', cardNoLength: 16, govNo: '03080000'},
        '622588' : {bankName: '招商银行', cardName:'一卡通', cardType: '借记卡', cardNoLength: 16, govNo: '03080000'},
        '622598' : {bankName: '招商银行', cardName:'公司卡', cardType: '借记卡', cardNoLength: 16, govNo: '03080000'},
        '622600' : {bankName: '民生银行', cardName:'民生信用卡', cardType: '贷记卡', cardNoLength: 16, govNo: '03050001'},
        '622601' : {bankName: '民生银行', cardName:'民生信用卡', cardType: '贷记卡', cardNoLength: 16, govNo: '03050001'},
        '622602' : {bankName: '中国民生银行', cardName:'民生银联白金信用卡', cardType: '贷记卡', cardNoLength: 16, govNo: '03050001'},
        '622603' : {bankName: '中国民生银行', cardName:'民生银联商务信用卡', cardType: '贷记卡', cardNoLength: 16, govNo: '03050001'},
        '622615' : {bankName: '民生银行', cardName:'民生借记卡', cardType: '借记卡', cardNoLength: 16, govNo: '03050000'},
        '622617' : {bankName: '中国民生银行', cardName:'民生借记卡', cardType: '借记卡', cardNoLength: 16, govNo: '03050000'},
        '622619' : {bankName: '中国民生银行', cardName:'民生借记卡', cardType: '借记卡', cardNoLength: 16, govNo: '03050000'},
        '622622' : {bankName: '中国民生银行', cardName:'民生借记卡', cardType: '借记卡', cardNoLength: 16, govNo: '03050000'},
        '622630' : {bankName: '华夏银行', cardName:'华夏卡', cardType: '借记卡', cardNoLength: 16, govNo: '03040000'},
        '622631' : {bankName: '华夏银行', cardName:'华夏至尊金卡', cardType: '借记卡', cardNoLength: 16, govNo: '03040000'},
        '622632' : {bankName: '华夏银行', cardName:'华夏丽人卡', cardType: '借记卡', cardNoLength: 16, govNo: '03040000'},
        '622633' : {bankName: '华夏银行', cardName:'华夏万通卡', cardType: '借记卡', cardNoLength: 16, govNo: '03040000'},
        '622650' : {bankName: '中国光大银行', cardName:'炎黄卡普卡', cardType: '贷记卡', cardNoLength: 16, govNo: '03030000'},
        '622655' : {bankName: '中国光大银行', cardName:'炎黄卡白金卡', cardType: '贷记卡', cardNoLength: 16, govNo: '03030000'},
        '622658' : {bankName: '中国光大银行', cardName:'炎黄卡金卡', cardType: '贷记卡', cardNoLength: 16, govNo: '03030000'},
        '622660' : {bankName: '光大银行', cardName:'阳光卡', cardType: '借记卡', cardNoLength: 16, govNo: '03030000'},
        '622678' : {bankName: '中信实业银行信用卡中心', cardName:'中信银联标准贷记卡', cardType: '贷记卡', cardNoLength: 16, govNo: '03020000'},
        '622679' : {bankName: '中信实业银行信用卡中心', cardName:'中信银联标准贷记卡', cardType: '贷记卡', cardNoLength: 16, govNo: '03020000'},
        '622680' : {bankName: '中信实业银行信用卡中心', cardName:'中信银联标准贷记卡', cardType: '贷记卡', cardNoLength: 16, govNo: '03020000'},
        '622681' : {bankName: '江西省农村信用社联合社', cardName:'百福卡', cardType: '借记卡', cardNoLength: 19, govNo: '14394200'},
        '622682' : {bankName: '江西省农村信用社联合社', cardName:'百福卡', cardType: '借记卡', cardNoLength: 19, govNo: '14394200'},
        '622684' : {bankName: '渤海银行', cardName:'渤海银行公司借记卡', cardType: '借记卡', cardNoLength: 16, govNo: '03170000'},
        '622688' : {bankName: '中信实业银行信用卡中心', cardName:'中信银联标准贷记卡', cardType: '贷记卡', cardNoLength: 16, govNo: '03020000'},
        '622689' : {bankName: '中信实业银行信用卡中心', cardName:'中信银联标准贷记卡', cardType: '贷记卡', cardNoLength: 16, govNo: '03020000'},
        '622690' : {bankName: '中信实业银行', cardName:'中信借记卡', cardType: '借记卡', cardNoLength: 16, govNo: '03020000'},
        '622691' : {bankName: '中信实业银行', cardName:'中信借记卡', cardType: '借记卡', cardNoLength: 16, govNo: '03020000'},
        '622692' : {bankName: '中信实业银行', cardName:'中信贵宾卡', cardType: '借记卡', cardNoLength: 16, govNo: '03020000'},
        '622696' : {bankName: '中信银行', cardName:'中信理财宝金卡', cardType: '借记卡', cardNoLength: 16, govNo: '03020000'},
        '622698' : {bankName: '中信银行', cardName:'中信理财宝白金卡', cardType: '借记卡', cardNoLength: 16, govNo: '03020000'},
        '622700' : {bankName: '建设银行', cardName:'龙卡储蓄卡', cardType: '借记卡', cardNoLength: 19, govNo: '01050000'},
        '622725' : {bankName: '中国建设银行', cardName:'龙卡准贷记卡', cardType: '准贷记卡', cardNoLength: 16, govNo: '01050000'},
        '622728' : {bankName: '中国建设银行', cardName:'龙卡准贷记卡金卡', cardType: '准贷记卡', cardNoLength: 16, govNo: '01050000'},
        '622750' : {bankName: '中国银行澳门分行', cardName:'人民币信用卡', cardType: '信用卡', cardNoLength: 16, govNo: '01040446'},
        '622751' : {bankName: '中国银行澳门分行', cardName:'人民币信用卡', cardType: '信用卡', cardNoLength: 16, govNo: '01040446'},
        '622752' : {bankName: '中国银行', cardName:'长城人民币信用卡', cardType: '准贷记卡', cardNoLength: 16, govNo: '01040000'},
        '622753' : {bankName: '中国银行', cardName:'长城人民币信用卡', cardType: '准贷记卡', cardNoLength: 16, govNo: '01040000'},
        '622755' : {bankName: '中国银行', cardName:'长城人民币信用卡', cardType: '准贷记卡', cardNoLength: 16, govNo: '01040000'},
        '622756' : {bankName: '中国银行', cardName:'长城人民币信用卡', cardType: '准贷记卡', cardNoLength: 16, govNo: '01040000'},
        '622757' : {bankName: '中国银行', cardName:'长城人民币信用卡', cardType: '准贷记卡', cardNoLength: 16, govNo: '01040000'},
        '622758' : {bankName: '中国银行', cardName:'长城人民币信用卡', cardType: '准贷记卡', cardNoLength: 16, govNo: '01040000'},
        '622759' : {bankName: '中国银行', cardName:'长城信用卡', cardType: '准贷记卡', cardNoLength: 16, govNo: '01040000'},
        '622760' : {bankName: '中国银行', cardName:'银联单币贷记卡', cardType: '贷记卡', cardNoLength: 16, govNo: '01040000'},
        '622761' : {bankName: '中国银行', cardName:'长城信用卡', cardType: '准贷记卡', cardNoLength: 16, govNo: '01040000'},
        '622762' : {bankName: '中国银行', cardName:'长城信用卡', cardType: '准贷记卡', cardNoLength: 16, govNo: '01040000'},
        '622763' : {bankName: '中国银行', cardName:'长城信用卡', cardType: '准贷记卡', cardNoLength: 16, govNo: '01040000'},
        '622770' : {bankName: '中国银行澳门分行', cardName:'中银卡', cardType: '借记卡', cardNoLength: 19, govNo: '01040446'},
        '622777' : {bankName: '曲靖市商业银行', cardName:'珠江源卡', cardType: '借记卡', cardNoLength: 16, govNo: '05027360'},
        '622821' : {bankName: '农业银行', cardName:'金穗校园卡', cardType: '借记卡', cardNoLength: 19, govNo: '01030000'},
        '622822' : {bankName: '农业银行', cardName:'金穗星座卡', cardType: '借记卡', cardNoLength: 19, govNo: '01030000'},
        '622823' : {bankName: '农业银行', cardName:'金穗社保卡', cardType: '借记卡', cardNoLength: 19, govNo: '01030000'},
        '622824' : {bankName: '农业银行', cardName:'金穗旅游卡', cardType: '借记卡', cardNoLength: 19, govNo: '01030000'},
        '622825' : {bankName: '农业银行', cardName:'金穗青年卡', cardType: '借记卡', cardNoLength: 19, govNo: '01030000'},
        '622826' : {bankName: '农业银行', cardName:'复合介质金穗通宝卡', cardType: '借记卡', cardNoLength: 19, govNo: '01030000'},
        '622836' : {bankName: '农业银行', cardName:'金穗贷记卡', cardType: '贷记卡', cardNoLength: 16, govNo: '01030000'},
        '622837' : {bankName: '农业银行', cardName:'金穗贷记卡', cardType: '贷记卡', cardNoLength: 16, govNo: '01030000'},
        '622840' : {bankName: '农业银行', cardName:'金穗通宝卡', cardType: '借记卡', cardNoLength: 19, govNo: '01030000'},
        '622844' : {bankName: '农业银行', cardName:'金穗通宝卡', cardType: '借记卡', cardNoLength: 19, govNo: '01030000'},
        '622845' : {bankName: '农业银行', cardName:'金穗通宝卡', cardType: '借记卡', cardNoLength: 19, govNo: '01030000'},
        '622846' : {bankName: '中国农业银行', cardName:'金穗通宝卡', cardType: '借记卡', cardNoLength: 19, govNo: '01030000'},
        '622847' : {bankName: '农业银行', cardName:'金穗通宝卡', cardType: '借记卡', cardNoLength: 19, govNo: '01030000'},
        '622848' : {bankName: '农业银行', cardName:'金穗通宝卡', cardType: '借记卡', cardNoLength: 19, govNo: '01030000'},
        '622855' : {bankName: '江苏东吴农村商业银行', cardName:'新苏卡', cardType: '借记卡', cardNoLength: 19, govNo: '14303050'},
        '622856' : {bankName: '桂林市商业银行', cardName:'漓江卡', cardType: '借记卡', cardNoLength: 17, govNo: '04916170'},
        '622857' : {bankName: '日照市商业银行', cardName:'黄海卡', cardType: '借记卡', cardNoLength: 19, govNo: '03134732'},
        '622858' : {bankName: '浙江省农村信用社联合社', cardName:'丰收卡', cardType: '借记卡', cardNoLength: 19, govNo: '14293300'},
        '622859' : {bankName: '珠海农村信用合作社联社', cardName:'信通卡', cardType: '借记卡', cardNoLength: 19, govNo: '14315850'},
        '622860' : {bankName: '大庆市商业银行', cardName:'玉兔卡', cardType: '借记卡', cardNoLength: 16, govNo: '04922690'},
        '622861' : {bankName: '澳门永亨银行股份有限公司', cardName:'人民币卡', cardType: '借记卡', cardNoLength: 16, govNo: '26080446'},
        '622864' : {bankName: '莱芜市商业银行', cardName:'金凤卡', cardType: '借记卡', cardNoLength: 16, govNo: '04974634'},
        '622865' : {bankName: '长春市商业银行', cardName:'君子兰一卡通', cardType: '借记卡', cardNoLength: 19, govNo: '04062410'},
        '622866' : {bankName: '徐州市商业银行', cardName:'彭城借记卡', cardType: '借记卡', cardNoLength: 16, govNo: '04943030'},
        '622867' : {bankName: '重庆市农村信用社联合社', cardName:'信合平安卡', cardType: '借记卡', cardNoLength: 16, govNo: '14136530'},
        '622869' : {bankName: '太仓农村商业银行', cardName:'郑和卡', cardType: '借记卡', cardNoLength: 19, govNo: '14333051'},
        '622870' : {bankName: '靖江市长江城市信用社', cardName:'长江卡', cardType: '借记卡', cardNoLength: 16, govNo: '04933120'},
        '622871' : {bankName: '永亨银行', cardName:'永亨尊贵理财卡', cardType: '借记卡', cardNoLength: 16, govNo: '25060344'},
        '622877' : {bankName: '徽商银行', cardName:'黄山卡', cardType: '借记卡', cardNoLength: 19, govNo: '04403600'},
        '622878' : {bankName: '杭州市商业银行', cardName:'西湖卡', cardType: '借记卡', cardNoLength: 18, govNo: '04233310'},
        '622879' : {bankName: '徽商银行', cardName:'黄山卡', cardType: '借记卡', cardNoLength: 19, govNo: '04403600'},
        '622880' : {bankName: '柳州市商业银行', cardName:'龙城卡', cardType: '借记卡', cardNoLength: 16, govNo: '04956140'},
        '622881' : {bankName: '柳州市商业银行', cardName:'龙城卡', cardType: '借记卡', cardNoLength: 16, govNo: '04956140'},
        '622882' : {bankName: '尧都区农村信用合作社联社', cardName:'天河卡', cardType: '借记卡', cardNoLength: 19, govNo: '14341770'},
        '622884' : {bankName: '渤海银行', cardName:'渤海银行借记卡', cardType: '借记卡', cardNoLength: 16, govNo: '03170000'},
        '622885' : {bankName: '重庆市农村信用社联合社', cardName:'信合希望卡', cardType: '借记卡', cardNoLength: 16, govNo: '14136530'},
        '622886' : {bankName: '烟台市商业银行', cardName:'金通卡', cardType: '借记卡', cardNoLength: 16, govNo: '03134560'},
        '622891' : {bankName: '武进农村商业银行', cardName:'阳湖卡', cardType: '借记卡', cardNoLength: 19, govNo: '14353041'},
        '622892' : {bankName: '上海银行', cardName:'申卡借记卡', cardType: '借记卡', cardNoLength: 18, govNo: '04012900'},
        '622893' : {bankName: '贵州省农村信用社联合社', cardName:'信合卡', cardType: '借记卡', cardNoLength: 19, govNo: '14367000'},
        '622895' : {bankName: '江苏锡州农村商业银行', cardName:'金阿福', cardType: '借记卡', cardNoLength: 16, govNo: '14373020'},
        '622897' : {bankName: '中外合资.南充市商业银行', cardName:'熊猫团团卡', cardType: '借记卡', cardNoLength: 19, govNo: '04966730'},
        '622898' : {bankName: '长沙市商业银行', cardName:'芙蓉贷记卡', cardType: '贷记卡', cardNoLength: 16, govNo: '04615511'},
        '622900' : {bankName: '长沙市商业银行', cardName:'芙蓉贷记卡', cardType: '贷记卡', cardNoLength: 16, govNo: '04615511'},
        '622901' : {bankName: '兴业银行', cardName:'银联信用卡', cardType: '贷记卡', cardNoLength: 16, govNo: '03090010'},
        '622908' : {bankName: '兴业银行', cardName:'兴业自然人生理财卡', cardType: '借记卡', cardNoLength: 18, govNo: '03090000'},
        '622909' : {bankName: '兴业银行', cardName:'万能卡', cardType: '借记卡', cardNoLength: 16, govNo: '03090002'},
        '650600' : {bankName: 'Discover Financial Services，Inc', cardName:'发现卡', cardType: '贷记卡', cardNoLength: 16, govNo: '26290840'},
        '650700' : {bankName: 'Discover Financial Services，Inc', cardName:'发现卡', cardType: '贷记卡', cardNoLength: 16, govNo: '26290840'},
        '650800' : {bankName: 'Discover Financial Services，Inc', cardName:'发现卡', cardType: '贷记卡', cardNoLength: 16, govNo: '26290840'},
        '650900' : {bankName: 'Discover Financial Services，Inc', cardName:'发现卡', cardType: '贷记卡', cardNoLength: 16, govNo: '26290840'},
        '682900' : {bankName: '上海银行', cardName:'上海明珠卡', cardType: '借记卡', cardNoLength: 18, govNo: '04012900'},
        '683970' : {bankName: '泉州市商业银行', cardName:'海峡储蓄卡', cardType: '借记卡', cardNoLength: 18, govNo: '04643970'},
        '685800' : {bankName: '广东发展银行', cardName:'广发理财通', cardType: '借记卡', cardNoLength: 18, govNo: '03060000'},
        '690755' : {bankName: '招商银行', cardName:'招行一卡通', cardType: '储蓄卡', cardNoLength: 15, govNo: '03080000'},
        '694301' : {bankName: '长沙市商业银行', cardName:'芙蓉卡', cardType: '借记卡', cardNoLength: 18, govNo: '04615510'},
        '695800' : {bankName: '南通商业银行', cardName:'金桥卡', cardType: '借记卡', cardNoLength: 18, govNo: '04523060'},
    };


    $.chinabackcard = {
        bind: function (inputId, selectId) {
            var _input = $("#" + inputId);
            var _select = $("#" + selectId);

            _select.attr('readonly', 'true');

            _input.keyup(function(e){
                var tempVal = _input.val();
                if (tempVal.length >= 6){
                    var tempSelectItem = banks[tempVal.substring(0,6)];
                    if (tempSelectItem){
                        _select.val(tempSelectItem.bankName);
                    } else {
                        _select.val("无法识别该银行卡");
                    }
                } else {
                    _select.val("");
                }
            });
        }
    };
})(jQuery);