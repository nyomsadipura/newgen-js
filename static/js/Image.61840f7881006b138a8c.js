(this["fb_mf"] = this["fb_mf"] || []).push([[22],{

/***/ 2271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var E_iBPS6_CICD_Build_Compilation_appformBuilder_war_SVNCode_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60);
/* harmony import */ var E_iBPS6_CICD_Build_Compilation_appformBuilder_war_SVNCode_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2286);
/* harmony import */ var _css_COLUMN_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99);
/* harmony import */ var _css_COLUMN_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_COLUMN_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ElemDeleteControlWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(102);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2174);
/* harmony import */ var _Resources_globalFunctions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(70);
/* harmony import */ var _Icons_Image_defaultImg_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(504);
/* harmony import */ var _ReusableComponents_QuickTools_QuickTools__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(108);
/* harmony import */ var _ReusableComponents_Events_EventExecutionLogic__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(130);
/* harmony import */ var _components_IFormDesignerLayout_Logic_UserIdLogic__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(80);
/* harmony import */ var _ReusableComponents_Alert_CustomizedAlert__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(71);
/* harmony import */ var _components_IFormDesignerLayout_IFormDesignerLogic__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(66);
/* harmony import */ var _components_CustomHooks_CustomHooks__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(62);
/* harmony import */ var _ReusableComponents_EditableLabel_EditableLabel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(126);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(0);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__);
var _window,_window$appformBuilde,_window2,_window2$appformBuild;var useStyles=Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])({mainDiv:{padding:"2px",display:"flex",flexDirection:function flexDirection(style){return style.LabelInputAlignment==="topDown"?"column":style.LabelInputAlignment==="downTop"?"column-reverse":style.LabelInputAlignment==="leftRight"?"row":style.LabelInputAlignment==="rightLeft"?"row-reverse":"column";}},imageParent:{width:"100%",textAlign:((_window=window)===null||_window===void 0?void 0:(_window$appformBuilde=_window.appformBuilder_configs)===null||_window$appformBuilde===void 0?void 0:_window$appformBuilde.selectedLanguage)==="ar"||((_window2=window)===null||_window2===void 0?void 0:(_window2$appformBuild=_window2.appformBuilder_configs)===null||_window2$appformBuild===void 0?void 0:_window2$appformBuild.selectedLanguage)==="ar-SA"?"right":function(style){return style.imageAlignment||"left";}}});function Image(props){var _props$data,_props$data$style,_props$data2,_props$data3,_props$data4,_props$data4$style,_props$data6,_props$data6$style,_formState2$style5,_formState2$style6,_formState2$style6$Br,_formState2$style7,_formState2$style7$Br,_props$data9,_props$data9$style,_props$data10,_props$data10$style,_props$data15,_props$data15$style,_props$data16,_props$data16$style,_props$data17,_props$data17$style,_props$data18,_props$data18$style,_props$data19,_props$data19$style;var contexts=Object(_components_CustomHooks_CustomHooks__WEBPACK_IMPORTED_MODULE_14__[/* GetStateFromData */ "b"])(props.containerId);var _GetState=Object(_components_CustomHooks_CustomHooks__WEBPACK_IMPORTED_MODULE_14__[/* GetState */ "a"])("controlSelected","tempCanWidth"),controlSelected=_GetState.controlSelected,tempCanWidth=_GetState.tempCanWidth;var _contexts$contexts=contexts.contexts,IdPrecedence=_contexts$contexts.IdPrecedence,deleteControl=_contexts$contexts.deleteControl,formState2=_contexts$contexts.formState2,openQuickToolFor=_contexts$contexts.openQuickToolFor,device=_contexts$contexts.device,imageBaseURL=_contexts$contexts.imageBaseURL;var reduxContexts=contexts;var style=props.data.style;var data=props.data;var isSubformInPage=(props===null||props===void 0?void 0:props.isSubformInPage)||false;var defLabel=(props===null||props===void 0?void 0:(_props$data=props.data)===null||_props$data===void 0?void 0:(_props$data$style=_props$data.style)===null||_props$data$style===void 0?void 0:_props$data$style["Label"])||"";var themeData=formState2===null||formState2===void 0?void 0:formState2.theme;var imageParentSpanId="imageParentSpan";var actualControlId=props.data.id;var mappingId=(_props$data2=props.data)===null||_props$data2===void 0?void 0:_props$data2["style"]["MappingId"];var userDefinedId=(_props$data3=props.data)===null||_props$data3===void 0?void 0:_props$data3["style"]["CustomId"];var conditionalQuickToolOpening=props.id===openQuickToolFor?true:false;var classes=useStyles(style);var _useState=Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),_useState2=Object(E_iBPS6_CICD_Build_Compilation_appformBuilder_war_SVNCode_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState,2),editLabel=_useState2[0],setEditLabel=_useState2[1];var _useState3=Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({open:false,showConfirm:"showNotification"}),_useState4=Object(E_iBPS6_CICD_Build_Compilation_appformBuilder_war_SVNCode_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState3,2),alertData=_useState4[0],setAlertData=_useState4[1];var _useState5=Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(defLabel),_useState6=Object(E_iBPS6_CICD_Build_Compilation_appformBuilder_war_SVNCode_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState5,2),defaultLabel=_useState6[0],setDefaultLabel=_useState6[1];var _useState7=Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(conditionalQuickToolOpening),_useState8=Object(E_iBPS6_CICD_Build_Compilation_appformBuilder_war_SVNCode_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState7,2),open=_useState8[0],setOpen=_useState8[1];var _useState9=Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),_useState10=Object(E_iBPS6_CICD_Build_Compilation_appformBuilder_war_SVNCode_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState9,2),mobileDisplay=_useState10[0],setMobileDisplay=_useState10[1];var _useState11=Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),_useState12=Object(E_iBPS6_CICD_Build_Compilation_appformBuilder_war_SVNCode_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState11,2),tabDisplay=_useState12[0],setTabDisplay=_useState12[1];var _useState13=Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])((props===null||props===void 0?void 0:(_props$data4=props.data)===null||_props$data4===void 0?void 0:(_props$data4$style=_props$data4.style)===null||_props$data4$style===void 0?void 0:_props$data4$style["imageStyle"])||{}),_useState14=Object(E_iBPS6_CICD_Build_Compilation_appformBuilder_war_SVNCode_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState13,2),imageStyle=_useState14[0],setImageStyle=_useState14[1];//dummy state for render
var _useState15=Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),_useState16=Object(E_iBPS6_CICD_Build_Compilation_appformBuilder_war_SVNCode_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState15,2),rerenderState=_useState16[0],setReRenderState=_useState16[1];var bringEditableLabel=function bringEditableLabel(){return setEditLabel(true);};function showAlertConfirmNotifications(dataTobeSet){setAlertData(dataTobeSet);}Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function(){var _props$data5,_props$data5$style;return setDefaultLabel(props===null||props===void 0?void 0:(_props$data5=props.data)===null||_props$data5===void 0?void 0:(_props$data5$style=_props$data5.style)===null||_props$data5$style===void 0?void 0:_props$data5$style["Label"]);},[props===null||props===void 0?void 0:(_props$data6=props.data)===null||_props$data6===void 0?void 0:(_props$data6$style=_props$data6.style)===null||_props$data6$style===void 0?void 0:_props$data6$style["Label"]]);var suggestedId=Object(_components_IFormDesignerLayout_Logic_UserIdLogic__WEBPACK_IMPORTED_MODULE_11__[/* getSuggestedId */ "a"])(actualControlId,mappingId,userDefinedId,IdPrecedence);var imageRefrence=Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);var parentSpanRefrence=Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);var imageLabelDefaultStyles=Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])({font_family:"Open Sans",font_size:"12px",font_color:"#000",font_weight:"bold",font_style:"normal"});var setImageLabelStyles=function setImageLabelStyles(newStyle){var prevState=JSON.stringify(imageLabelDefaultStyles.current);imageLabelDefaultStyles.current=Object(E_iBPS6_CICD_Build_Compilation_appformBuilder_war_SVNCode_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(E_iBPS6_CICD_Build_Compilation_appformBuilder_war_SVNCode_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({},imageLabelDefaultStyles.current),newStyle);if(!props.previewmode){if(prevState!==JSON.stringify(imageLabelDefaultStyles.current)){setReRenderState(!rerenderState);}}};Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function(){var _themeData$BasicTheme,_themeData$BasicTheme2;if(themeData!==null&&themeData!==void 0&&(_themeData$BasicTheme=themeData["BasicTheme"])!==null&&_themeData$BasicTheme!==void 0&&_themeData$BasicTheme["FontFamily"]){setImageLabelStyles({font_family:themeData["BasicTheme"]["FontFamily"]==="Select"?"Open Sans":themeData["BasicTheme"]["FontFamily"]});}if(themeData!==null&&themeData!==void 0&&(_themeData$BasicTheme2=themeData["BasicTheme"])!==null&&_themeData$BasicTheme2!==void 0&&_themeData$BasicTheme2["FontSize"]){setImageLabelStyles({font_size:themeData["BasicTheme"]["FontSize"]});}},[themeData===null||themeData===void 0?void 0:themeData["BasicTheme"],style===null||style===void 0?void 0:style["renderTheme"]]);Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function(){var _props$data7,_props$data8,_props$data8$style;if(props.data.style["imageStyle"]===undefined||props.data.style["imageStyle"]===null){var _props$data$style2;props.data.style.imageStyle=Object(E_iBPS6_CICD_Build_Compilation_appformBuilder_war_SVNCode_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(E_iBPS6_CICD_Build_Compilation_appformBuilder_war_SVNCode_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({},(_props$data$style2=props.data.style)===null||_props$data$style2===void 0?void 0:_props$data$style2.imageStyle),{},{height:props.data.style.height,width:props.data.style.width,defaultWidth:props.data.style.defaultWidth,defaultHeight:props.data.style.defaultHeight,size:props.data.style.size,scale:"1",resize:props.data.style.resize,widthType:props.data.style.scale==="pixels"?"px":"%",aspectRatio:"auto",transform:"rotate(0deg) scale(1,1)",degree:0,scaleX:1,scaleY:1});}Object(_components_IFormDesignerLayout_IFormDesignerLogic__WEBPACK_IMPORTED_MODULE_13__[/* updatePartialJSON */ "R"])(props===null||props===void 0?void 0:(_props$data7=props.data)===null||_props$data7===void 0?void 0:_props$data7.id,props===null||props===void 0?void 0:props.data);setImageStyle((props===null||props===void 0?void 0:(_props$data8=props.data)===null||_props$data8===void 0?void 0:(_props$data8$style=_props$data8.style)===null||_props$data8$style===void 0?void 0:_props$data8$style.imageStyle)||{});},[props.data.style,props.data.style.imageStyle]);var startMobile=Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();var endMobile=Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();var startTab=Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();var endTab=Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function(){if(formState2!==null&&formState2!==void 0&&formState2.style){var _formState2$style,_formState2$style$Bre,_formState2$style$Bre2,_formState2$style2,_formState2$style2$Br,_formState2$style2$Br2,_formState2$style3,_formState2$style3$Br,_formState2$style3$Br2,_formState2$style4,_formState2$style4$Br,_formState2$style4$Br2;startMobile.current=parseInt((_formState2$style=formState2.style)===null||_formState2$style===void 0?void 0:(_formState2$style$Bre=_formState2$style["Breakpoint"])===null||_formState2$style$Bre===void 0?void 0:(_formState2$style$Bre2=_formState2$style$Bre["Mobile"])===null||_formState2$style$Bre2===void 0?void 0:_formState2$style$Bre2["StartValue"]);endMobile.current=parseInt((_formState2$style2=formState2.style)===null||_formState2$style2===void 0?void 0:(_formState2$style2$Br=_formState2$style2["Breakpoint"])===null||_formState2$style2$Br===void 0?void 0:(_formState2$style2$Br2=_formState2$style2$Br["Mobile"])===null||_formState2$style2$Br2===void 0?void 0:_formState2$style2$Br2["EndValue"]);startTab.current=parseInt((_formState2$style3=formState2.style)===null||_formState2$style3===void 0?void 0:(_formState2$style3$Br=_formState2$style3["Breakpoint"])===null||_formState2$style3$Br===void 0?void 0:(_formState2$style3$Br2=_formState2$style3$Br["Tab"])===null||_formState2$style3$Br2===void 0?void 0:_formState2$style3$Br2["StartValue"]);endTab.current=parseInt((_formState2$style4=formState2.style)===null||_formState2$style4===void 0?void 0:(_formState2$style4$Br=_formState2$style4["Breakpoint"])===null||_formState2$style4$Br===void 0?void 0:(_formState2$style4$Br2=_formState2$style4$Br["Tab"])===null||_formState2$style4$Br2===void 0?void 0:_formState2$style4$Br2["EndValue"]);}},[(_formState2$style5=formState2.style)===null||_formState2$style5===void 0?void 0:_formState2$style5["Breakpoint"],(_formState2$style6=formState2.style)===null||_formState2$style6===void 0?void 0:(_formState2$style6$Br=_formState2$style6["Breakpoint"])===null||_formState2$style6$Br===void 0?void 0:_formState2$style6$Br["Mobile"],(_formState2$style7=formState2.style)===null||_formState2$style7===void 0?void 0:(_formState2$style7$Br=_formState2$style7["Breakpoint"])===null||_formState2$style7$Br===void 0?void 0:_formState2$style7$Br["Tab"]]);Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function(){if(props!==null&&props!==void 0&&props.previewmode)Object(_components_IFormDesignerLayout_IFormDesignerLogic__WEBPACK_IMPORTED_MODULE_13__[/* handleDisplayProperty */ "H"])(props,device,setMobileDisplay,setTabDisplay,startMobile.current,endMobile.current,startTab.current,endTab.current);},[props===null||props===void 0?void 0:(_props$data9=props.data)===null||_props$data9===void 0?void 0:(_props$data9$style=_props$data9.style)===null||_props$data9$style===void 0?void 0:_props$data9$style["MobileVisible"],props===null||props===void 0?void 0:(_props$data10=props.data)===null||_props$data10===void 0?void 0:(_props$data10$style=_props$data10.style)===null||_props$data10$style===void 0?void 0:_props$data10$style["TabsVisible"],device,endMobile,endTab,startMobile,startTab,tempCanWidth]);Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function(){if(props!==null&&props!==void 0&&props.previewmode&&document.getElementById("imageParentSpan")){document.getElementById("imageParentSpan").ondragstart=function(){return false;};}},[props===null||props===void 0?void 0:props.previewmode]);var _setLabelHandler=function setLabelHandler(recievedLabel){try{var _props$data11,_props$data11$style,_props$data12;if((_props$data11=props.data)!==null&&_props$data11!==void 0&&(_props$data11$style=_props$data11.style)!==null&&_props$data11$style!==void 0&&_props$data11$style.Label||(_props$data12=props.data)!==null&&_props$data12!==void 0&&_props$data12.id){setDefaultLabel(function(prevDefaultLabel){if(prevDefaultLabel===recievedLabel){return prevDefaultLabel;}else{props.data.style["Label"]=recievedLabel;return recievedLabel;}});setEditLabel(false);}}catch(err){console.error(err);}};var handleImageClick=function handleImageClick(event){var _props$data13,_props$data13$event,_props$data13$event$E,_props$data14;if((_props$data13=props.data)!==null&&_props$data13!==void 0&&(_props$data13$event=_props$data13.event)!==null&&_props$data13$event!==void 0&&(_props$data13$event$E=_props$data13$event.Events)!==null&&_props$data13$event$E!==void 0&&_props$data13$event$E.Click)Object(_ReusableComponents_Events_EventExecutionLogic__WEBPACK_IMPORTED_MODULE_10__[/* triggerEventCalls */ "b"])(event,{id:props===null||props===void 0?void 0:(_props$data14=props.data)===null||_props$data14===void 0?void 0:_props$data14.id},props.data.event,props.data.elem_type,showAlertConfirmNotifications,reduxContexts);};var labelStyle={color:(style===null||style===void 0?void 0:style.FontColor)||imageLabelDefaultStyles.current.font_color,fontFamily:(style===null||style===void 0?void 0:style.FontFamily)||imageLabelDefaultStyles.current.font_family,fontSize:(style===null||style===void 0?void 0:style.FontSize)||imageLabelDefaultStyles.current.font_size,fontWeight:(style===null||style===void 0?void 0:style.FontWeight)||imageLabelDefaultStyles.current.font_weight,fontStyle:(style===null||style===void 0?void 0:style.FontStyle)||imageLabelDefaultStyles.current.font_style,lineHeight:1,"whiteSpace":"break-spaces"};var padding_left=((_props$data15=props.data)===null||_props$data15===void 0?void 0:(_props$data15$style=_props$data15.style)===null||_props$data15$style===void 0?void 0:_props$data15$style["SpacingLeft"])||"0px";var padding_right=((_props$data16=props.data)===null||_props$data16===void 0?void 0:(_props$data16$style=_props$data16.style)===null||_props$data16$style===void 0?void 0:_props$data16$style["SpacingRight"])||"0px";var padding_top=((_props$data17=props.data)===null||_props$data17===void 0?void 0:(_props$data17$style=_props$data17.style)===null||_props$data17$style===void 0?void 0:_props$data17$style["SpacingTop"])||"0px";var padding_bottom=((_props$data18=props.data)===null||_props$data18===void 0?void 0:(_props$data18$style=_props$data18.style)===null||_props$data18$style===void 0?void 0:_props$data18$style["SpacingBottom"])||"0px";var inputStylePadding={paddingLeft:padding_left,paddingRight:padding_right,paddingTop:padding_top,paddingBottom:padding_bottom,display:"flex"};if((_props$data19=props.data)!==null&&_props$data19!==void 0&&(_props$data19$style=_props$data19.style)!==null&&_props$data19$style!==void 0&&_props$data19$style.LabelInputAlignment){if(props.data.style.LabelInputAlignment=="leftRight"){inputStylePadding.flexDirection="row";labelStyle.marginRight="1rem";}else if(props.data.style.LabelInputAlignment=="rightLeft"){inputStylePadding.flexDirection="row-reverse";labelStyle.marginLeft="1rem";}else if(props.data.style.LabelInputAlignment=="downTop"){inputStylePadding.flexDirection="column-reverse";labelStyle.marginTop="4px";labelStyle.marginBottom="0px";}}var parseNum=function parseNum(num){return isNaN(parseFloat(num))?1:parseFloat(num);};var imgStyle={width:(imageStyle===null||imageStyle===void 0?void 0:imageStyle.resize)==="fullWidth"?"".concat(parseNum((imageStyle===null||imageStyle===void 0?void 0:imageStyle.enlarge)||1)*100,"%"):(imageStyle===null||imageStyle===void 0?void 0:imageStyle.widthType)==="px"?(imageStyle===null||imageStyle===void 0?void 0:imageStyle.width)+(imageStyle===null||imageStyle===void 0?void 0:imageStyle.widthType):(imageStyle===null||imageStyle===void 0?void 0:imageStyle.size)+(imageStyle===null||imageStyle===void 0?void 0:imageStyle.widthType),height:imageStyle.aspectRatio!=="auto"?"auto":(imageStyle===null||imageStyle===void 0?void 0:imageStyle.widthType)==="px"?(imageStyle===null||imageStyle===void 0?void 0:imageStyle.height)+(imageStyle===null||imageStyle===void 0?void 0:imageStyle.widthType):(imageStyle===null||imageStyle===void 0?void 0:imageStyle.size)+(imageStyle===null||imageStyle===void 0?void 0:imageStyle.widthType),transform:imageStyle.transform,aspectRatio:imageStyle===null||imageStyle===void 0?void 0:imageStyle.aspectRatio,margin:"auto",borderColor:(style===null||style===void 0?void 0:style.BorderColor)||"#c4c4c4",borderWidth:(style===null||style===void 0?void 0:style.BorderWidth)||"0px",borderRadius:(style===null||style===void 0?void 0:style.BorderRadius)||"0px",borderStyle:"solid",maxWidth:"100%"};var imgSorce=style.uploadType==="file"?Object(_Resources_globalFunctions__WEBPACK_IMPORTED_MODULE_7__[/* checkValid */ "b"])(style.iconFile)&&"".concat(imageBaseURL).concat(Object(_Resources_globalFunctions__WEBPACK_IMPORTED_MODULE_7__[/* checkValid */ "b"])(style.iconFile))||_Icons_Image_defaultImg_svg__WEBPACK_IMPORTED_MODULE_8__["default"]:Object(_Resources_globalFunctions__WEBPACK_IMPORTED_MODULE_7__[/* checkValid */ "b"])(style.imageUrl)&&"".concat(imageBaseURL).concat(Object(_Resources_globalFunctions__WEBPACK_IMPORTED_MODULE_7__[/* checkValid */ "b"])(style.imageUrl))||_Icons_Image_defaultImg_svg__WEBPACK_IMPORTED_MODULE_8__["default"];if(props.previewmode){return(style===null||style===void 0?void 0:style.Visible)==="true"?/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxs"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].Group,{id:suggestedId+"_group",style:mobileDisplay===false||tabDisplay===false?{display:"none"}:inputStylePadding,frameindex:props.data.frameIndex,elementindex:props.data.elementIndex,sheetIndex:props.data.sheetIndex,sheetElementIndex:props.data.sheetElementIndex,sheetFrameElementindex:props.data.sheetFrameElementindex,control_id:props.id,className:"".concat(_css_COLUMN_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.formStyle," ").concat(classes.mainDiv," spacingThemeControls"),elem_type:"image",tabIndex:"1",children:[/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].Label,{id:suggestedId+"_label",elem_type:"image",className:" spacingThemeLabel ",style:labelStyle,control_id:props.data.id,frameindex:data.frameIndex,elementindex:data.elementIndex,children:props.data.style["Label"]}),/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])("span",{control_id:props.id,className:classes.imageParent,id:imageParentSpanId,ref:parentSpanRefrence,tabIndex:"-1",children:/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])("img",{style:imgStyle,id:suggestedId,ref:imageRefrence,onClick:handleImageClick,alt:"image1",src:imgSorce})})]},props.id):null;}else{var _props$data20,_window3;return/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxs"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].Group,{id:suggestedId+"_group",onClick:isSubformInPage?{}:function(e){return props.handleSelected(e,props.id,"n");},onKeyDown:function onKeyDown(e){return props.handleSelected(e);},frameindex:props.data.frameIndex,elementindex:props.data.elementIndex,sheetIndex:props.data.sheetIndex,sheetElementIndex:props.data.sheetElementIndex,sheetFrameElementindex:props.data.sheetFrameElementindex,control_id:props.id,className:"".concat(_css_COLUMN_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.formStyle," ").concat(classes.mainDiv," spacingThemeControls"),style:inputStylePadding,elem_type:"image",tabIndex:"1",children:[/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_ReusableComponents_EditableLabel_EditableLabel__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"],{defaultLabel:/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].Label,{id:suggestedId+"_label",elem_type:"image",onDoubleClick:bringEditableLabel,className:"spacingThemeLabel ",style:labelStyle,control_id:props.data.id,frameindex:data.frameIndex,elementindex:data.elementIndex,children:props.data.style["Label"]||""}),editlabel:editLabel,default_value:defaultLabel,setLabelHandler:function setLabelHandler(recievedLabel){return _setLabelHandler(recievedLabel);},style:labelStyle}),/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])("span",{control_id:props.id,className:classes.imageParent,id:imageParentSpanId,ref:parentSpanRefrence,children:/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])("img",{id:suggestedId,src:imgSorce,style:imgStyle,ref:imageRefrence,alt:"Control Picture"})}),(controlSelected===null||controlSelected===void 0?void 0:controlSelected.id)===(props===null||props===void 0?void 0:props.id)&&/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_ElemDeleteControlWrapper__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"],{isSubformInPage:isSubformInPage,containerId:props.containerId,id:props.id,data:props.data,deleteControl:deleteControl,elemType:(_props$data20=props.data)===null||_props$data20===void 0?void 0:_props$data20.elem_type,setDragging:props.setDragging,handleReorderStart:props.handleReorderStart,handleReorderDrop:props.handleReorderDrop,dragId:props.dragId,dragType:"column"}),((_window3=window)===null||_window3===void 0?void 0:_window3.openQuickTools)&&open&&/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_ReusableComponents_QuickTools_QuickTools__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"],{containerId:props.containerId,selectedControl:props.data,open:open,setOpen:setOpen}),alertData.open===true&&/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_ReusableComponents_Alert_CustomizedAlert__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"],{alertData:alertData})]},props.id);}}/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ })

}]);
//# sourceMappingURL=Image.61840f7881006b138a8c.js.map