/**
 * Created by wzk on 2017/8/3.
 */
let serverUrl = "http://www.fooju.cn/fjw/api.php?";
export default {
  serverUrl: "http://www.fooju.cn/",
  login: serverUrl +"s=Login/login",/*登录*/
  register: serverUrl+"s = Login/register",/*注册*/
  used_lists: serverUrl +"s=Product/used_lists",/*二手房列表*/
  used_detail:serverUrl+"s=Product/used_detail_app",/*二手房列详情*/
  adLists:serverUrl+"s=Advertisement/lists",/*新闻列表*/
  adDetail:serverUrl+"s=Advertisement/detail",/*新闻详情*/
  bottomLists:serverUrl+"s=Bottom/lists",/*底部网站管理列表*/
  bottomDetail:serverUrl+"s=Bottom/detail",/*底部网站管理详情*/
  region_detail:serverUrl+"s=Basics/region_detail",/*区域详情*/
  Agentlists:serverUrl+"s=Agent/lists",/*经济人列表*/
  Agentdetail:serverUrl+"s=Agent/detail",/*经济人详情*/
  Userlists:serverUrl+"s=User/lists",/*会员列表*/
  Userdetail:serverUrl+"s=User/detail",/*会员详情*/
  Storelists:serverUrl+"s=Store/lists",/*会员详情*/
  Storedetail:serverUrl+"s=Store/detail",/*会员详情*/
  EncyTop:serverUrl+"s=Ency/encyTop",
  EncyType:serverUrl+"s=Ency/encyType",/*百科分类*/
  EncyList:serverUrl+"s=Ency/encyList",/*百科分类列表*/
  EncyDetail:serverUrl+"s=Ency/encyDetail",/*百科分类详情*/
  EncyTypeList:serverUrl+'s=Ency/encyTypeList',/*百科所有分类*/
  EncySearch:serverUrl+'s=Ency/encySearch',/*百科搜索*/
  RegionLists:serverUrl+'s=Basics/region_lists',/*区域接口*/
  Detaail:serverUrl+'s=User/detail',/*用户详情*/
  StoreLists:serverUrl+'s=Store/lists',/*门店列表*/
  StoreDetail:serverUrl+'s=Store/detail',/*门店详情*/
  RetalLists:serverUrl+'s=Product/retal_lists',/*租房列表*/
  RtalDetail:serverUrl+'s=Product/retal_detail_app',/*租房详情*/
  OperationUser:serverUrl+'s=Operation/user',/*帮我找房*/
  OperationOwner:serverUrl+'s=Operation/owner',/*我是业主*/
  VillageList:serverUrl+'s=Village/lists',/*小区列表*/
  VillageDetail:serverUrl+'s=Village/detail',/*小区详情*/
  villageCollect:serverUrl+'s=Operation/villageCollect',/*关注小区*/
  villageCollectList:serverUrl+'s=Operation/villageCollectList',/*关注小区*/
  // List
  manyVillageCollectCancel:serverUrl+'s=Operation/manyVillageCollectCancel',/*取消小区关注*/
  VillageMore:serverUrl+'s=Village/more',/*小区更多简介*/
  BasicsDrop:serverUrl+'s=Basics/drop_down_wap',/*更多*/
  OperationHouse:serverUrl+'s=Operation/houseCollect',/*关注房源*/
  OperationHouseCancel:serverUrl+'s=Operation/houseCollectCancel',/*取消关注房源*/
  OperationUsers:serverUrl+'s=Operation/userCollect',/*我的关注房源*/
  OperationMany:serverUrl+'s=Operation/manyCollectCancel',/*取消房源*/
  RecordYK:serverUrl+'s=Record/yuekan_add',/*添加越约看清单*/
  RecordLists:serverUrl+'s=Record/yuekan_lists',/*约看列表*/
  RecordDK:serverUrl+'s=Record/daikan_add',/*添加预约看房*/
  NewList:serverUrl+'s=Product/new_lists',/*新房列表*/
  New_Detail:serverUrl+'s=Product/new_detail',/*新房详情*/
  AgentListsByHouse:serverUrl+'s=Agent/lists_by_house',/*预约看房经纪人*/
  OperationMysuer:serverUrl+'s=Operation/userCollectAgent',/*我的经纪人*/
  OperationAgentCollect:serverUrl+'s=Operation/agentCollect',/*收藏经纪人*/
  OperationAgentCollectCancel:serverUrl+'s=Operation/agentCollectCancel',/*取消收藏经纪人*/
  OperationVillageCollect:serverUrl+'s=Record/kanfang_record',/*看房记录*/
  RecordRicheng_lists:serverUrl+'s=Record/richeng_lists',/*看房日程列表*/
  RecordDaikan:serverUrl+'s=Record/daikan_lists',/*带看记录详情*/
  CalculatorIndex:serverUrl+'s=Calculator/index',/*房贷计算器*/
  OperationAssess:serverUrl+'s=Operation/assess',/*房屋估价*/
  CalculatorNew:serverUrl+'s=Calculator/newHouseTax',/*新房税率*/
  VillageSchool:serverUrl+'s=Village/school',/*学区房*/
  VillageSchoolLists:serverUrl+'s=Village/school_lists',/*学区列表*/
  CalculatorHouseTax:serverUrl+'s=Calculator/usedHouseTax',/*二手房税率*/
  AgentComment:serverUrl+'s=Agent/comment',/*经纪人评房*/
  ProductRecord:serverUrl+'s=Product/record',/*带看记录*/
  ProductWap:serverUrl+'s=Product/recommend/plat/1',/*热门推荐*/
  BootomBilts:serverUrl+'s=Bottom/blists',/*版权信息*/
  MapMapHouse:serverUrl+'s=Map/mapHouseList',/*地图找房*/
  VillageDeal:serverUrl+'s=Village/deal',/*成交记录*/
  productUsedP:serverUrl+'s=Product/used_pic',/*户型格局*/
  mapHouseVillage:serverUrl+'s=Map/mapHouseVillage',/**地图小区列表*/MsgVerify:serverUrl+'s=Msg/verify',/*验证码*/
  SendMsg:serverUrl+'s=Msg/send_msg',/*发送验证码*/
  Register:serverUrl+'s=Login/register',/*注册*/
  Forget:serverUrl+'s=Login/forget',/*修改密码*/
  SpecialLsit:serverUrl+'s=Special/specialList',
  SpecialDetail:serverUrl+'s=Special/specialDetail',
  SpecialVerify:serverUrl+'s=Special/verify',
  SpecialSpecialEnrol:serverUrl+'s=Special/specialEnrol',
  AdAll:serverUrl+'s=Advertisement/indexLeaderboard',
  OperationFeedback:serverUrl+'s=Operation/feedback',/*反馈*/
  newAllhouseType:serverUrl+'s=Product/house_type_new',/*新房详情全部户型*/
  VillageFind:serverUrl+'s=Village/find',//搜索
  AgentHouseList:serverUrl+'s=Agent/house_lists',/*经济人详情房源列表*/
  RecordDelete:serverUrl+'s=Record/record_del',/*看房清单删除*/
  Tlogin:serverUrl+'s=Login/t_login',/*qq登陸*/
  Ntlogin:serverUrl+'s=Login/nt_login',/*第三方登录（QQ，微博）*/
  encyTop:serverUrl+'s=Ency/encyTop',
  paramToUrl:function(a,b){
    let str=""
    for (let o in b){
      str+="/"+o+"/"+b[o];
    }
    return a+str
  }
}
