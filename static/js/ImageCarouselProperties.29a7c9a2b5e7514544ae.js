(this["fb_mf"] = this["fb_mf"] || []).push([[23],{

/***/ 2352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(58);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Card.js + 3 modules
var Card = __webpack_require__(2305);

// EXTERNAL MODULE: ./src/components/Properties/PropertiesConfiguration.jsx
var PropertiesConfiguration = __webpack_require__(84);

// CONCATENATED MODULE: ./src/components/Properties/ImageCarouselPropertiesJson.jsx
var ImageCarouselPropertiesJson={"Basic":{"UploadImagesCarousel":"","CustomId":""},"Behaviour":{"Visible":"","AllowAutoScroll":"","ImageCarouselHeight":"","AutoplaySpeed":"","Speed":""},"Display":{"MobileVisible":"","TabsVisible":""},"Spacing":{"SpacingLeft":"","SpacingRight":"","SpacingTop":"","SpacingBottom":""},"Advance Properties":{"ControlDescription":""}};/* harmony default export */ var Properties_ImageCarouselPropertiesJson = (ImageCarouselPropertiesJson);
// EXTERNAL MODULE: ./src/ReusableComponents/CollapseCard/CollapseCard.jsx
var CollapseCard = __webpack_require__(90);

// EXTERNAL MODULE: ./src/components/LeftNavigation/DesignerControls/BasicControls.module.css
var BasicControls_module = __webpack_require__(78);
var BasicControls_module_default = /*#__PURE__*/__webpack_require__.n(BasicControls_module);

// EXTERNAL MODULE: ./src/ReusableComponents/ToggleBtn/ToggleBtn.jsx
var ToggleBtn = __webpack_require__(85);

// EXTERNAL MODULE: ./src/Icons/RedCross.jsx
var RedCross = __webpack_require__(110);

// EXTERNAL MODULE: ./src/Icons/EditIcon.jsx
var EditIcon = __webpack_require__(179);

// EXTERNAL MODULE: ./src/Icons/DragAdvListview.jsx
var DragAdvListview = __webpack_require__(283);

// EXTERNAL MODULE: ./src/ReusableComponents/ControlLabel/ControlLabel.jsx
var ControlLabel = __webpack_require__(100);

// EXTERNAL MODULE: ./src/Resources/globalFunctions.js + 1 modules
var globalFunctions = __webpack_require__(70);

// EXTERNAL MODULE: ./src/ReusableComponents/Alert/CustomizedAlert.jsx
var CustomizedAlert = __webpack_require__(71);

// EXTERNAL MODULE: ./node_modules/react-i18next/dist/es/useTranslation.js + 1 modules
var useTranslation = __webpack_require__(2317);

// EXTERNAL MODULE: ./src/ReusableComponents/ErrorMessageComponent/ErrorMessageComponent.jsx
var ErrorMessageComponent = __webpack_require__(103);

// EXTERNAL MODULE: ./src/ReusableComponents/ImageUploadBtn/ImageUploadBtn.jsx
var ImageUploadBtn = __webpack_require__(115);

// EXTERNAL MODULE: ./src/components/IFormDesignerLayout/IFormDesignerComponents/ImageCarouselProperties/ImageEditor.jsx
var ImageEditor = __webpack_require__(659);

// EXTERNAL MODULE: ./node_modules/jquery/dist/jquery.js
var jquery = __webpack_require__(235);
var jquery_default = /*#__PURE__*/__webpack_require__.n(jquery);

// EXTERNAL MODULE: ./src/components/IFormDesignerLayout/RequestLogic.jsx
var RequestLogic = __webpack_require__(72);

// EXTERNAL MODULE: ./src/components/IFormDesignerLayout/Logic/UserIdLogic.js
var UserIdLogic = __webpack_require__(80);

// EXTERNAL MODULE: ./src/ReusableComponents/Tooltip/Tooltip.jsx
var Tooltip = __webpack_require__(145);

// EXTERNAL MODULE: ./src/components/CustomHooks/CustomHooks.js
var CustomHooks = __webpack_require__(62);

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(0);

// CONCATENATED MODULE: ./src/components/IFormDesignerLayout/IFormDesignerComponents/ImageCarouselProperties/ImageCarouselProperties.jsx
var ImageCarouselProperties_ImageCarouselProperties=function ImageCarouselProperties(props){var _window,_window$appformBuilde,_window2,_window2$appformBuild,_props$selectedContro,_props$selectedContro2;var translationStyles1=((_window=window)===null||_window===void 0?void 0:(_window$appformBuilde=_window.depsatkur_configs)===null||_window$appformBuilde===void 0?void 0:_window$appformBuilde.selectedLanguage)==="ar"||((_window2=window)===null||_window2===void 0?void 0:(_window2$appformBuild=_window2.depsatkur_configs)===null||_window2$appformBuild===void 0?void 0:_window2$appformBuild.selectedLanguage)==="ar-SA";var contexts=Object(CustomHooks["b" /* GetStateFromData */])(props.containerId);var _contexts$contexts=contexts.contexts,updateJson=_contexts$contexts.updateJson,deleteControl=_contexts$contexts.deleteControl,showAlertConfirmNotifications=_contexts$contexts.showAlertConfirmNotifications;var updatedComponentInFormState=updateJson.updatedComponentInFormState;var _useTranslation=Object(useTranslation["a" /* useTranslation */])(["styles","translation"]),t=_useTranslation.t;var _useState=Object(react["useState"])(false),_useState2=Object(slicedToArray["a" /* default */])(_useState,2),errorMessageId=_useState2[0],setErrorMessageId=_useState2[1];var _useState3=Object(react["useState"])({open:false,showConfirm:"showNotification"}),_useState4=Object(slicedToArray["a" /* default */])(_useState3,2),alertData=_useState4[0],setAlertData=_useState4[1];var _useState5=Object(react["useState"])(),_useState6=Object(slicedToArray["a" /* default */])(_useState5,2),draggedImagePosition=_useState6[0],setDraggedImagePosition=_useState6[1];var _useState7=Object(react["useState"])(),_useState8=Object(slicedToArray["a" /* default */])(_useState7,2),editableImage=_useState8[0],setEditableImage=_useState8[1];var _useState9=Object(react["useState"])(-1),_useState10=Object(slicedToArray["a" /* default */])(_useState9,2),imgInd=_useState10[0],setImgInd=_useState10[1];function handleCombo(comboId){var select=document.getElementById(comboId);var propertyName=select.getAttribute("name");var optionTag=select.options[select.selectedIndex];handleProperty(propertyName,optionTag.value);}function handleRegex(propertyName,propertyValue,event,inputBoxId){try{if(event&&event.which!==8&&event.which!==46&&!Object(globalFunctions["l" /* regexValidator */])(event.key,PropertiesConfiguration["a" /* default */][propertyName]["regexType"])){event.preventDefault();setAlertData(Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({},PropertiesConfiguration["a" /* default */]["customizedAlertNotificationData"]),{},{open:true,alertContentKey:"RegexErrorMessage"}));}}catch(e){}}function handleProperty(propertyName,propertyValue,event,inputBoxId){try{if(propertyName==="CustomId"){if(propertyValue!==props.selectedControl.style.CustomId){var element=event.target;var jsonToSend={customControlId:propertyValue,controlid:props.selectedControl.id};Object(RequestLogic["Q" /* validateCustomControlId */])(jsonToSend).then(function(response){if(response&&response.data&&response.data.status==="0"){var updatedJson=Object(UserIdLogic["b" /* updateUserId */])(props.selectedControl,// whole control Json
propertyValue//newly defined id
);if(updatedJson){updatedComponentInFormState(props.selectedControl.id,updatedJson);}}else if(response&&response.data&&response.data.status==="-1"){showAlertConfirmNotifications({open:true,showConfirm:"showNotification",alertType:"error",alertContentKey:"CustomControl Id already Exist"});element.value=props.selectedControl.style.CustomId||"";}}).catch(function(error){// handle error
element.value=props.selectedControl.style.CustomId||"";console.log(error);showAlertConfirmNotifications({open:true,showConfirm:"showNotification",alertType:"error",alertContentKey:"Server side error ".concat(error)});});}}else{props.selectedControl.style[propertyName]=propertyValue;if(propertyName==="ImageCarouselHeight"){props.selectedControl.style["ImageCarouselWidth"]=propertyValue;}if(propertyName==="AutoplaySpeed"){var speed=props.selectedControl.style["Speed"];if(Number(propertyValue)<Number(speed)){showAlertConfirmNotifications({open:true,showConfirm:"showNotification",alertType:"error",alertContentKey:"".concat(t("translation:Autoplay speed should not be less than speed"))});}else{props.selectedControl.style[propertyName]=propertyValue;}}if(propertyName==="Speed"){var autoPlaySpeed=props.selectedControl.style["AutoplaySpeed"];if(Number(propertyValue)>Number(autoPlaySpeed)){showAlertConfirmNotifications({open:true,showConfirm:"showNotification",alertType:"error",alertContentKey:"".concat(t("translation:Speed should not be greater than autoplay speed"))});}else{props.selectedControl.style[propertyName]=propertyValue;}}updatedComponentInFormState(props.selectedControl.id,props.selectedControl);props.applyChanges(props.formData);setErrorMessageId(false);}}catch(e){}}function _handleImageEditing(arg,imageFile,imgStyle){if(arg==="Save2"){props.selectedControl.style.imageList[imgInd].imageStyle=imgStyle;}else if(arg==="Save"){props.selectedControl.style.imageList[imgInd].imageStyle=imgStyle;props.selectedControl.style.imageList[imgInd].imageFile=imageFile;}updatedComponentInFormState(props.selectedControl.id,props.selectedControl);}function handleOpenCrop(index){setImgInd(index);setEditableImage(true);}function handleClose(){setEditableImage(false);}function handleIcon(imageName,imageFile){if(!props.selectedControl.style["imageList"]){props.selectedControl.style["imageList"]=[];}if(imageName!==""&&imageFile!=="")props.selectedControl.style["imageList"].push({imageName:imageName,imageFile:imageFile});updatedComponentInFormState(props.selectedControl.id,props.selectedControl);props.applyChanges(props.formData);}function handleNoIcon(){//customalert
showAlertConfirmNotifications({open:true,showConfirm:"showNotification",alertType:"error",alertContentKey:"CANT_UPLOAD"});setTimeout(function(){jquery_default()("#limitDiv").css("background-color","red");},1);}function changeImage(){}function deleteImage(imageDetails,index){try{var indexToBeDeleted=-1;var currControl=Object(objectSpread2["a" /* default */])({},props.selectedControl);props.selectedControl.style["imageList"].map(function(imgDetails,imgIndex){if(imgDetails.imageName===imageDetails.imageName)indexToBeDeleted=imgIndex;});if(indexToBeDeleted>-1){currControl.style["imageList"].splice(indexToBeDeleted,1);currControl.style["iconName"]="";// WORK_ON_THIS
updatedComponentInFormState(currControl.id,currControl);}}catch(e){console.log("Error occured while deleting image from image carousel list");}}function allowDrop(event){event.preventDefault();}function handleDrag(event){setDraggedImagePosition(event.target.getAttribute("imagePosition"));}function handleDrop(event){if(event==="undefined"){event.preventDefault();}else if(event.target.getAttribute("imagePosition")){try{var targetPosition=event.target.getAttribute("imagePosition");var temp_imageDetails=props.selectedControl.style["imageList"];var draggedImage=temp_imageDetails[draggedImagePosition];temp_imageDetails[draggedImagePosition]=temp_imageDetails[targetPosition];temp_imageDetails[targetPosition]=draggedImage;props.selectedControl.style["imageList"]=temp_imageDetails;updatedComponentInFormState(props.selectedControl.id,props.selectedControl);props.applyChanges(props.formData);}catch(e){//customalert
showAlertConfirmNotifications({open:true,showConfirm:"showNotification",alertType:"error",alertContentKey:"INTERCHANGE_IMAGE_POSITION"});}}}if(Properties_ImageCarouselPropertiesJson&&PropertiesConfiguration["a" /* default */]){var CollapsibleItems=[];Object.keys(Properties_ImageCarouselPropertiesJson).forEach(function(key,index){var collapseComponentBody=[];Object.keys(Properties_ImageCarouselPropertiesJson[key]).forEach(function(property){if(PropertiesConfiguration["a" /* default */][property]&&PropertiesConfiguration["a" /* default */][property].type){if(props.selectedControl.columnList&&property==="Column1"){props.selectedControl.columnList.map(function(col,index){if(col&&col.style){collapseComponentBody.push(prepareHtmlTag(col.style.ColumnName,PropertiesConfiguration["a" /* default */][property].type,col.columnIndex));}});}else{collapseComponentBody.push(prepareHtmlTag(property,PropertiesConfiguration["a" /* default */][property].type));}}});CollapsibleItems.push(/*#__PURE__*/Object(jsx_runtime["jsx"])(CollapseCard["a" /* default */],{id:index+"",heading:key,body:collapseComponentBody}));});}function handleToggle(e,field){var value=e.target.value;handleProperty(field,value);}function validateRegex(propertyName,propertyValue,event,inputBoxId){try{var passValue=event===null||event===void 0?void 0:event.key;if(propertyName==="CustomId"){passValue=[propertyValue.slice(0,event.target.selectionEnd)+event.key+propertyValue.slice(event.target.selectionEnd)].join("");}if(event&&event.which!==8&&event.which!==46&&event.code!=="Tab"&&!Object(globalFunctions["l" /* regexValidator */])(passValue,PropertiesConfiguration["a" /* default */][propertyName]["regexType"])){event.preventDefault();setAlertData(Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({},PropertiesConfiguration["a" /* default */]["customizedAlertNotificationData"]),{},{open:true,alertContentKey:"RegexErrorMessage"}));}else{setErrorMessageId(false);}}catch(e){console.log("Error while validating regex");}}function handlePropertyText(propertyName,propertyValue){props.selectedControl.style[propertyName]=propertyValue;props.applyChanges(props.formData);}function prepareHtmlTag(key,type,colId){var _window3,_window3$appformBuild;switch(type.toLowerCase()){case"combo":return/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:BasicControls_module_default.a.parentDiv,style:translationStyles1?{display:"flex"}:null,children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{className:BasicControls_module_default.a.leftLabel,children:t("translation:".concat(PropertiesConfiguration["a" /* default */][key].label))}),/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:BasicControls_module_default.a.RightLabelSelectDiv1,children:/*#__PURE__*/Object(jsx_runtime["jsx"])("select",{className:BasicControls_module_default.a.RightLabelSelect1Table,name:key,id:props.selectedControl.id+key,onChange:function onChange(){return handleCombo(props.selectedControl.id+key);},children:PropertiesConfiguration["a" /* default */][key].children.map(function(optionTagData,optionCount){if(PropertiesConfiguration["a" /* default */][key].children[optionCount].Value){if(props&&props.selectedControl&&props.selectedControl.style&&props.selectedControl.style[key]===PropertiesConfiguration["a" /* default */][key].children[optionCount].Value){return/*#__PURE__*/Object(jsx_runtime["jsx"])("option",{value:PropertiesConfiguration["a" /* default */][key].children[optionCount].Value,selected:true,children:t("translation:".concat(PropertiesConfiguration["a" /* default */][key].children[optionCount].Title))});}else{return/*#__PURE__*/Object(jsx_runtime["jsx"])("option",{value:PropertiesConfiguration["a" /* default */][key].children[optionCount].Value,children:t("translation:".concat(PropertiesConfiguration["a" /* default */][key].children[optionCount].Title))});}}})},props.selectedControl.id)})]});case"text_top_bottom":return/*#__PURE__*/Object(jsx_runtime["jsxs"])(jsx_runtime["Fragment"],{children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{children:t("translation:".concat(PropertiesConfiguration["a" /* default */][key].label))}),/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{children:/*#__PURE__*/Object(jsx_runtime["jsx"])("input",{type:"text","aria-label":"Control Value1",defaultValue:props.selectedControl.style[key],id:props.selectedControl.id+key,className:[BasicControls_module_default.a.fullWidthTextBox,errorMessageId===props.selectedControl.id+key?BasicControls_module_default.a.inputBoxErrorStyle:null].join(" "),onKeyPress:function onKeyPress(event){return handleRegex(key,event.target.value,event,props.selectedControl.id+key);},onKeyUp:function onKeyUp(event){return handleRegex(key,event.target.value,event,props.selectedControl.id+key);},onBlur:function onBlur(event){return handleProperty(key,event.target.value,event);}},props.selectedControl.id)}),errorMessageId===props.selectedControl.id+key?/*#__PURE__*/Object(jsx_runtime["jsx"])(ErrorMessageComponent["a" /* default */],{errorMessage:"non-permissible value"}):null]});case"toggle":return/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:BasicControls_module_default.a.toggleBtn,children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{className:BasicControls_module_default.a.leftLabel,children:t("translation:".concat(PropertiesConfiguration["a" /* default */][key].label))}),/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:translationStyles1?BasicControls_module_default.a.toggleCheckboxArabic:BasicControls_module_default.a.toggleCheckbox,children:/*#__PURE__*/Object(jsx_runtime["jsx"])(ToggleBtn["a" /* default */],{toggleState:props.selectedControl.style[key],handleToggle:handleToggle,field:key},props.selectedControl.id)})]});case"text":return/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:BasicControls_module_default.a.parentDiv,style:translationStyles1?{display:"flex"}:null,children:[/*#__PURE__*/Object(jsx_runtime["jsxs"])("span",{className:BasicControls_module_default.a.leftLabel,children:[t("translation:".concat(PropertiesConfiguration["a" /* default */][key].label)),PropertiesConfiguration["a" /* default */][key].label==="Autoplay Speed"?/*#__PURE__*/Object(jsx_runtime["jsx"])(Tooltip["a" /* default */],{tooltip:t("translation:".concat("Autoplay speed should be greater than or equal to speed"))}):null,PropertiesConfiguration["a" /* default */][key].label==="Speed"?/*#__PURE__*/Object(jsx_runtime["jsx"])(Tooltip["a" /* default */],{tooltip:t("translation:".concat("Speed should be less than or equal to autoplay speed"))}):null]}),/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:BasicControls_module_default.a.RightTextBox,children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("input",{type:"text","aria-label":"Control Value2",defaultValue:props.selectedControl.style[key],className:BasicControls_module_default.a.RightLabelTextBox,onKeyPress:function onKeyPress(event){return validateRegex(key,event.target.value,event,props.selectedControl.id+key);},onKeyUp:function onKeyUp(event){return validateRegex(key,event.target.value,event,props.selectedControl.id+key);},onBlur:function onBlur(event){return handleProperty(key,event.target.value,event);}},props.selectedControl.id),key!=="CustomId"?/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:translationStyles1?BasicControls_module_default.a.RightTextboxPlaceholderArabic:BasicControls_module_default.a.RightTextboxPlaceholder,children:PropertiesConfiguration["a" /* default */][key].unit}):null]}),errorMessageId===props.selectedControl.id+key?/*#__PURE__*/Object(jsx_runtime["jsx"])(ErrorMessageComponent["a" /* default */],{errorMessage:"non-permissible value"}):null]});case"textbox":return/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{children:[/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:BasicControls_module_default.a.leftLabelForTextBox,children:[/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:BasicControls_module_default.a.labelForLabel,children:[t("translation:".concat(PropertiesConfiguration["a" /* default */][key].label))," "]}),/*#__PURE__*/Object(jsx_runtime["jsx"])("input",{type:"text","aria-label":"Control Value3",defaultValue:props.selectedControl.style[key],id:props.selectedControl.id+key,maxLength:(_window3=window)===null||_window3===void 0?void 0:(_window3$appformBuild=_window3.depsatkur_configs)===null||_window3$appformBuild===void 0?void 0:_window3$appformBuild.label_max_length,className:[BasicControls_module_default.a.textBoxLayoutForLable,errorMessageId===props.selectedControl.id+key?BasicControls_module_default.a.inputBoxErrorStyle:null].join(" "),onKeyPress:function onKeyPress(event){return validateRegex(key,event.target.value,event,props.selectedControl.id+key);},onKeyUp:function onKeyUp(event){return validateRegex(key,event.target.value,event,props.selectedControl.id+key);},onBlur:function onBlur(event){return handleProperty(key,event.target.value,event);}},props.selectedControl.id)]}),errorMessageId===props.selectedControl.id+key?/*#__PURE__*/Object(jsx_runtime["jsx"])(ErrorMessageComponent["a" /* default */],{errorMessage:"non-permissible value"}):null]});case"textarea":return/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:BasicControls_module_default.a.parentDiv,children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("p",{className:BasicControls_module_default.a.leftLabel,children:t("translation:".concat(PropertiesConfiguration["a" /* default */][key].label))}),/*#__PURE__*/Object(jsx_runtime["jsx"])("textarea",{"aria-label":props.selectedControl.style[key],className:[BasicControls_module_default.a.textBoxLayoutStyletextArea,errorMessageId===props.selectedControl.id+key?BasicControls_module_default.a.inputBoxErrorStyle:null].join(" "),onKeyPress:function onKeyPress(event){return validateRegex(key,event.target.value,event,props.selectedControl.id+key);},onKeyUp:function onKeyUp(event){return validateRegex(key,event.target.value,event,props.selectedControl.id+key);},onBlur:function onBlur(event){return handlePropertyText(key,event.target.value);}},props.selectedControl.id),errorMessageId===props.selectedControl.id+key?/*#__PURE__*/Object(jsx_runtime["jsx"])(ErrorMessageComponent["a" /* default */],{errorMessage:"non-permissible value"}):null]});case"imageupload":return/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:BasicControls_module_default.a.parentDiv,children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("p",{className:BasicControls_module_default.a.propertiesHeader1,children:t("translation:".concat(PropertiesConfiguration["a" /* default */][key].label))}),props.selectedControl&&props.selectedControl.style&&props.selectedControl.style["imageList"]&&props.selectedControl.style["imageList"].length>=5?/*#__PURE__*/Object(jsx_runtime["jsx"])(ImageUploadBtn["a" /* default */],{containerId:props.containerId,handleImageUpload:handleNoIcon,iconName:"",selectedControl:props.selectedControl}):/*#__PURE__*/Object(jsx_runtime["jsx"])(ImageUploadBtn["a" /* default */],{containerId:props.containerId,handleImageUpload:handleIcon,iconName:props.selectedControl.style.iconName||"",selectedControl:props.selectedControl}),/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{id:"limitDiv",className:BasicControls_module_default.a.imageCarouselinfo,children:t("translation:".concat(PropertiesConfiguration["a" /* default */][key].info))}),props.selectedControl&&props.selectedControl.style&&props.selectedControl.style["imageList"]&&props.selectedControl.style["imageList"].length>0?props.selectedControl.style["imageList"].map(function(imageDetails,index){if(imageDetails){return/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:BasicControls_module_default.a.imageCarouselImageEditDelete,id:"imageDetails_"+index,imagePosition:index,onDragOver:allowDrop,onDrop:function onDrop(event){return handleDrop(event);},children:/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:BasicControls_module_default.a.addImageImageCarousel,imagePosition:index,draggable:"true",onDragStart:function onDragStart(event){return handleDrag(event);},children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{id:"image_"+index,className:BasicControls_module_default.a.imageCarouselSpan,draggable:"true",imagePosition:index,onClick:function onClick(){return changeImage(imageDetails,index);},children:/*#__PURE__*/Object(jsx_runtime["jsx"])(DragAdvListview["default"],{})}),/*#__PURE__*/Object(jsx_runtime["jsxs"])("span",{className:[BasicControls_module_default.a.imageCarouselSpan,BasicControls_module_default.a.imageCarouselImageFileName].join(" "),draggable:"true",imagePosition:index,children:[" ",imageDetails.imageName," "]}),/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{id:"image_"+index,className:[BasicControls_module_default.a.imageCarouselSpan,BasicControls_module_default.a.imageCarouselEditIcon].join(" "),onClick:function onClick(){return handleOpenCrop(index);},children:/*#__PURE__*/Object(jsx_runtime["jsx"])(EditIcon["default"],{})}),/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{id:"image_"+index,className:BasicControls_module_default.a.imageCarouselSpan,onClick:function onClick(){return deleteImage(imageDetails,index);},children:/*#__PURE__*/Object(jsx_runtime["jsx"])(RedCross["default"],{})})]})});}}):null]});}}return/*#__PURE__*/Object(jsx_runtime["jsxs"])(jsx_runtime["Fragment"],{children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(ControlLabel["a" /* default */],{label:"Image Carousel",handleDelete:deleteControl,id:props.selectedControl.id,customId:props===null||props===void 0?void 0:(_props$selectedContro=props.selectedControl)===null||_props$selectedContro===void 0?void 0:(_props$selectedContro2=_props$selectedContro.style)===null||_props$selectedContro2===void 0?void 0:_props$selectedContro2.CustomId}),/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:"propertiesBody",children:/*#__PURE__*/Object(jsx_runtime["jsx"])(Card["a" /* default */].Body,{className:BasicControls_module_default.a.cardBodyButtonProperties,children:CollapsibleItems.map(function(item,index){return item;})})}),editableImage==true&&props.selectedControl?/*#__PURE__*/Object(jsx_runtime["jsx"])(ImageEditor["a" /* default */],{open:true,containerId:props.containerId,selectedControl:props.selectedControl,imageDetails:{imageFile:props.selectedControl.style.imageList[imgInd].imageFile},imageStyle:props.selectedControl.style.imageList[imgInd].imageStyle,handleImageEditing:function handleImageEditing(arg,imgDetails,imgStyle){return _handleImageEditing(arg,imgDetails,imgStyle);},handleClose:handleClose},editableImage):/*#__PURE__*/Object(jsx_runtime["jsx"])(jsx_runtime["Fragment"],{}),alertData.open===true&&/*#__PURE__*/Object(jsx_runtime["jsx"])(CustomizedAlert["a" /* default */],{alertData:alertData})]});};/* harmony default export */ var IFormDesignerComponents_ImageCarouselProperties_ImageCarouselProperties = __webpack_exports__["default"] = (ImageCarouselProperties_ImageCarouselProperties);

/***/ })

}]);
//# sourceMappingURL=ImageCarouselProperties.29a7c9a2b5e7514544ae.js.map