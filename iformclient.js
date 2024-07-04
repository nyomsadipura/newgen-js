
function getExternalJSPaths(){
    // path to load multiple files are to given here comma seperated
    const filePaths=[];
    return filePaths;
}

function onRowClick(listviewId,rowIndex){
    return true
}

function clickLabelLink(labelid)
{
    //console.log("labelid",labelid);
}

function onChangeSectionState(frameId, state)
{
    //console.log(frameId,state);
}

function postHookPickListOk(columns,controlId){
   // console.log(columns, controlId);
}

function postHookDBLink() {
    //will call after dblinking
}

function tableOperation(tableId, operationType){
    if(operationType === "AddRow"){
        return true
    } else if(operationType === "DeleteRow"){
        return true
    } else if(operationType === "CopyRow"){
        return true
    }
}


function subFormLoad(buttonId){
    //console.log(buttonId);
}

function customValidation(type) {
    if(type === "D") {
        //operation that need to perform on Done button
    }
    else if(type === "S") {
        //operation that need to perform on Save button
    }
    else if(type === "I") {
        //operation that need to perform on Introduce button
    }
    return true;
}

function formLoad(){
}

function handleCustomKeyEvent(ev){
    //console.log("handleCustomKeyEvent",ev);
}

function subformDoneClick(buttonId){ 
    //Custom Code // Doubt
    //console.log(buttonId);
}

function picklistPreHook(controlId){ 
    //Custom Code 
    //console.log(controlId);
}

function subFormPreHook(buttonId){ 
    //console.log(buttonId);
    return true; 
}

function postHookPickListCancel(textid){ 
    //CustomCode 
//    console.log(textid);
}

function clearPicklistPostHook(controlId){
    //Custom Code 
  //  console.log(controlId);
}

function formChangeHook(ref){
    //console.log(ref);
}

function addRowPostHook(tableId){ 
    //Custom Code 
    //console.log(tableId);
}

function deleteRowPostHook(tableId, rowIndices){ 
    //Custom Code 
    //console.log(tableId, rowIndices);
}

function onTableCellChange(rowIndex,colIndex,ref,controlId){ 
    //custom code 
    //console.log(rowIndex,colIndex,ref,controlId);
}

function selectRowHook(tableId,selectedRowsArray,isAllRowsSelected){
    //custom code 
    //console.log(tableId, selectedRowsArray, isAllRowsSelected);
}

function saveAndNextPreHook(tabId){    
    return false;
}

function closeWorkitemHook() {
    
}

function skipValidation() {
    
    return false;
}


function preHookDeleteDocument() {
    return true;
}

function restrictMultipleDocUpload() {
    return false;
}

function setDefaultPrecisionForControl(){
    return 2
}

function clearEditableComboBoxValueIFNotExists(){
    return true
}
function selectFeatureToBeIncludedInRichText(){
    const FroalaToolbarJson = {
        "paragraphFormat": 'true',
        "fontSize": 'true',
        "fontFamily": 'true',
        "textColor": 'true',
        "backgroundColor": 'true',
        "alignLeft": 'true',
        "alignRight": 'true',
        "alignCenter": 'true',
        "alignJustify": 'true',    
        "strikeThrough": 'true',
        "subscript": 'true',
        "superscript": 'true',
        "formatOL": 'true',
        "formatUL": 'true',
        "indent": 'true',
        "outdent": 'true',
        "lineHeight": 'true',
        "quote": 'true',
        "bold": 'true',
        "italic": 'true',
        "underline": 'true',
        "insertHR": 'true',
        "insertTable": 'true',
        "undo": 'true',
        "redo": 'true',
        
    }
    return FroalaToolbarJson;
}































/*******************************************  Custom Code Implementation for fetching Workitem Information ************************************************
	1. Custom Implementation should call window.getWorkitemDataHandler(["form_data","doc","excp","todo"], true) to fetch Workitem Information.
		This function takes array of options and flag for DataStore. Application can pass options as per requirements.
		"form_data": Workitem's form data or attributes name and value(s)
		"doc": Workitem's document(s) information
		"excp": Workitem's exception(s) information
		"todo": Workitem's todo(s) information
		Callback: Callback is called when workitem Information is ready. Implementation should write custom code in window.workitemDataProcessor() method.
		fromDataStore (true, false): If true then it will fetch workitem data from DB else from current session store. Default is true.
		
	2. Output returned is in json format whose sample is provided at bottom of this article.	
***********************************************************************************************************************************************************/

window.getWorkitemDataHandler = function (){	
	window._getWorkitemData(["form_data","doc","excp","todo"], window.workitemDataProcessor, true);
}

window.workitemDataProcessor = function (workitemData){
	// ==============================================	Custom Implementation Start here	==========================================================    
	var workitemDataJson = JSON.parse(workitemData);
		
	if(workitemDataJson.data.doc){
		var docStatus = workitemDataJson.data.doc.status;
		if(docStatus.maincode == "0"){
			var docData = workitemDataJson.data.doc.data;
			//alert("##docData="+docData);
		}
	} 
	
	if(workitemDataJson.data.excp){
		var excpStatus = workitemDataJson.data.excp.status;
		if(excpStatus.maincode == "0"){
			var excpData = workitemDataJson.data.excp.data;	
			//alert("##excpData="+excpData);
		}
	} 
	
	if(workitemDataJson.data.form_data){
		var formDataStatus = workitemDataJson.data.form_data.status;
		if(formDataStatus.maincode == "0"){
			var formData = workitemDataJson.data.form_data.data;
			//alert("##formData="+formData);
		}
	} 
	
	if(workitemDataJson.data.todo){
		var todoStatus = workitemDataJson.data.todo.status;
		if(todoStatus.maincode == "0"){
			var todoData = workitemDataJson.data.todo.data;
			//alert("##todoData="+todoData);
		}
	}
	
	
	/* 	Uncomment below code to unlock the workitem. 
		This is required if Application load data from DB and does not store it in Web Session e.g Mobile App. Desktop Application version unlocks workiem on browser window close automatically so explicit call is not required.
	*/	
	//window._unlockWorkitem(workitemUnlockProcessor);
}

window.workitemUnlockProcessor = function (workitemUnlockData){
	workitemUnlockDataJson = JSON.parse(workitemUnlockData);
	
	var workitemUnlockStatus = workitemUnlockDataJson.status;
	if(workitemUnlockStatus.maincode == "0"){
		var workitemStatus = workitemUnlockDataJson.data.status_list[0].status; //"Success"
		//alert("##workitemStatus="+workitemStatus);
	}
}


/* Response JSON format of window._getWorkitemData(["data","doc","excp","todo"], true) method
***********************************************************************************************************************************************************
{"data": {"doc": {"data": {"allow_comment": true, "available_doc_types": [{"allowed_file_types": ["JPG", "JPEG", "WAV", "TXT", "TIFF", "PDF", "DOCM", "DOC", "XPS", "M4A", "3GP", "XLS", "DOCX", "MSG", "BMP", "DOTM", "EML", "GIF", "CSV", "XLSM", "M4V", "OGG", "DOTX", "TIF", "MP4", "XLSX", "WEBM", "MP3", "ICO", "MOV", "GTAR"], "description": "", "enable_upload": false, "id": "0", "mandatory": false, "max_file_size": 100, "multiple_upload": true, "name": "Conversation"}, {"allowed_file_types": ["JPG", "JPEG", "WAV", "TXT", "TIFF", "PDF", "DOCM", "DOC", "XPS", "M4A", "3GP", "XLS", "DOCX", "MSG", "BMP", "DOTM", "EML", "GIF", "CSV", "XLSM", "M4V", "OGG", "DOTX", "TIF", "MP4", "XLSX", "WEBM", "MP3", "ICO", "MOV", "GTAR"], "description": "", "enable_upload": true, "id": "2", "mandatory": false, "max_file_size": 100, "multiple_upload": true, "name": "D1"}, {"allowed_file_types": ["JPG", "JPEG", "WAV", "TXT", "TIFF", "PDF", "DOCM", "DOC", "XPS", "M4A", "3GP", "XLS", "DOCX", "MSG", "BMP", "DOTM", "EML", "GIF", "CSV", "XLSM", "M4V", "OGG", "DOTX", "TIF", "MP4", "XLSX", "WEBM", "MP3", "ICO", "MOV", "GTAR"], "description": "", "enable_upload": true, "id": "3", "mandatory": false, "max_file_size": 100, "multiple_upload": true, "name": "D2"}], "available_owners": ["admin"], "default_doc_info": {"doc_index": "1006"}, "doc_upload_options": {"camera": true, "google_drive": false, "omnidocs": true, "scan": true, "system": true}, "documents": [{"checkout_by": "", "checkout_status": "N", "comments": "chrome_7JlmLwmXaY", "created_on": "05/Jul/2023 15:18:03", "doc_order_no": "1", "doc_type": {"description": "", "id": "2", "mandatory": false, "name": "D1"}, "enable_annotate": false, "enable_checkin": false, "enable_checkout": true, "enable_delete": true, "enable_download": true, "enable_print": true, "enable_version": true, "extension": "png", "i_s_index": "424#1#", "id": "1006", "is_conversation": false, "last_modified_by": "", "last_modified_on": "05/Jul/2023 15:18:03", "name": "chrome_7JlmLwmXaY.png", "no_of_pages": "1", "org_name": "D1(chrome_7JlmLwmXaY.png)", "owner": "admin", "owner_index": "507", "pinned": false, "pinned_order": "", "resource_type": "N", "show_multi_page": true, "site_id": "1", "size": "190.064 KB", "thumbnail": "", "url_info": {"get_annotation": "/wd-rest/app/viewimageannotation", "get_document": "/wd-rest/app/getdocuments?ImgIndex=424&VolIndex=1&DocExt=png&DocIndex=1006&PageNo=1&docType=N&DocSize=194626&ArchivalMode=N&ArchivalCabinet=&wid=1&pid=NewNPCase-0000000010-process&taskid=&WD_SID=e24d129f-ee5b-4313-b445-1c049c038365&WD_RID=455c4bfb-8388-4ccf-834a-e6eb06e1d9fc&DocumentName=D1.png", "get_stamp": "/wd-rest/app/stampServlet", "get_stamp_annotation": "/wd-rest/app/viewimagestamp", "get_stamp_ini": "/wd-rest/app/getdocstamps", "save_annotation": "/wd-rest/app/imageannotation"}, "version": "1.0", "version_flag": "N"}], "docviewer_info": {"opall_params": {"AllPages": true, "AnnotationColor": "", "AnnotationOption": "0", "colorViewerCanvas": "16777215", "cropImageMinQuality": "0.2", "CroppedImageSize": "32", "CurrentUserName": "admin", "DefaultFontSettings": "", "initialZoomLensPercentage": "100%", "initialZoomLensStatus": false, "IsZoomWindowChangeRequired": true, "MenuBar": true, "pageSetupIE": "{'bheader': false, 'bfooter': false}", "printApproach": "1", "printOption": "2", "PrintParameter": "1", "RequestMethod": "POST", "resizeExMaxPixelLimit": "10000000", "resizeExMaxZoomLimit": "-100", "resizeOption": "0", "ResizePercentage": "1", "RetainAngleSettings": false, "SaveAnnotationDialog": true, "StampWithoutINI": false, "TextWaterMarkPosition": "4", "TransformOption": "0", "ViewWaterMark": false, "Watermark_Properties": "50,90,Courier,0,20,0,0.5", "watermarkPrinting": "4", "ZoomLens": false, "ZoomLensForZoning": "300,200,1,true"}}, "enable_filter": true, "enable_search": true, "enable_sorting": true, "sort_on": 5, "sort_order": "D", "sort_type": 1, "upload_doc_as": {"new": true, "new_version": true, "overwrite": true}}, "status": {"description": "", "errormsg": "", "maincode": "0", "suberrorcode": "0", "subject": ""}}, "excp": {"data": {"exceptions": [{"category_id": "0", "category_name": "Ungrouped", "description": "ds", "id": "1", "name": "E1", "raised": [], "type": "VR"}, {"category_id": "0", "category_name": "Ungrouped", "description": "dsa", "id": "2", "name": "E2", "raised": [], "type": "VR"}, {"category_id": "1", "category_name": "G1", "description": "sd", "id": "3", "name": "E3", "raised": [], "type": "VR"}, {"category_id": "2", "category_name": "G2", "description": "sd", "id": "5", "name": "E5", "raised": [], "type": "VR"}]}, "status": {"description": "", "errormsg": "", "maincode": "0", "suberrorcode": "0", "subject": ""}}, "form_data": {"data": {"attributes": [{"array": false, "disabled": false, "field_type": "163", "label": "NP Integer 1", "length": "", "name": "NP Integer 1", "type": "3", "value": ""}, {"array": false, "disabled": false, "field_type": "166", "label": "NP Float 1", "length": "15", "name": "NP Float 1", "type": "6", "value": ""}, {"array": false, "disabled": false, "field_type": "168", "label": "NP Date 1(dd/MMM/yyyy)  :", "length": "", "name": "NP Date 1", "type": "8", "value": ""}, {"array": false, "disabled": false, "field_type": "164", "label": "NP Long 1", "length": "", "name": "NP Long 1", "type": "4", "value": ""}, {"array": false, "disabled": false, "field_type": "1610", "label": "NP Text 1", "length": "255", "name": "NP Text 1", "type": "10", "value": ""}, {"array": false, "disabled": false, "field_type": "2610", "label": "New Ext NP String 1", "length": "255", "name": "New Ext NP String 1", "type": "10", "value": ""}, {"array": false, "disabled": false, "field_type": "263", "label": "New Ext NP Integer 1", "length": "", "name": "New Ext NP Integer 1", "type": "3", "value": ""}, {"array": false, "disabled": false, "field_type": "264", "label": "New Ext NP Long 1", "length": "", "name": "New Ext NP Long 1", "type": "4", "value": ""}, {"array": false, "disabled": false, "field_type": "266", "label": "New Ext NP Float 1", "length": "15", "name": "New Ext NP Float 1", "type": "6", "value": ""}, {"array": false, "disabled": false, "field_type": "268", "label": "New Ext NP Date Time 1(dd/MMM/yyyy)  :", "length": "", "name": "New Ext NP Date Time 1", "type": "8", "value": ""}, {"array": false, "disabled": false, "field_type": "2612", "label": "New Ext NP Boolean 1", "length": "", "name": "New Ext NP Boolean 1", "options": [{"label": "", "value": ""}, {"label": "True", "value": "true"}, {"label": "False", "value": "false"}], "type": "12", "value": ""}, {"array": false, "disabled": false, "field_type": "2615", "label": "New Ext NP ShrtDte 1(dd/MMM/yyyy)  :", "length": "", "name": "New Ext NP ShrtDte 1", "type": "15", "value": ""}, {"array": true, "attributes": [[{"array": false, "field_type": "2610", "label": "new_complex_np2_string_1", "length": "255", "name": "Complex NP 2-new_complex_np2_string_1", "type": "10", "value": ""}, {"array": false, "field_type": "263", "label": "new_complex_np2_integer_1", "length": "", "name": "Complex NP 2-new_complex_np2_integer_1", "type": "3", "value": ""}, {"array": false, "field_type": "264", "label": "new_complex_np2_long1", "length": "", "name": "Complex NP 2-new_complex_np2_long1", "type": "4", "value": ""}, {"array": false, "field_type": "266", "label": "new_complex_np2_float_1", "length": "15", "name": "Complex NP 2-new_complex_np2_float_1", "type": "6", "value": ""}, {"array": false, "field_type": "268", "label": "new_complex_np2_dattim1(dd/MMM/yyyy)  :", "length": "", "name": "Complex NP 2-new_complex_np2_dattim1", "type": "8", "value": ""}, {"array": false, "field_type": "2612", "label": "new_complex_np2_boolean1", "length": "", "name": "Complex NP 2-new_complex_np2_boolean1", "options": [{"label": "", "value": ""}, {"label": "True", "value": "true"}, {"label": "False", "value": "false"}], "type": "12", "value": ""}, {"array": false, "field_type": "2615", "label": "new_complex_np2_shrtdat1(dd/MMM/yyyy)  :", "length": "", "name": "Complex NP 2-new_complex_np2_shrtdat1", "type": "15", "value": ""}, {"array": false, "field_type": "2618", "label": "new_complex_np2_ntext1", "length": "", "name": "Complex NP 2-new_complex_np2_ntext1", "type": "18", "value": ""}], []], "disabled": false, "field_type": "2611", "label": "Complex NP 2", "length": "", "name": "Complex NP 2", "type": "11"}]}, "status": {"description": "", "errormsg": "", "maincode": "0", "suberrorcode": "0", "subject": ""}}, "todo": {"data": {"show_todo_desc": false, "todos": [{"additional_todo_item": "N", "associated_field": "&lt;None&gt;", "category_id": "0", "category_name": "Ungrouped", "current_value": "", "description": "sda", "mandatory": false, "name": "T1", "picklist": ["Yes", "No", "N/A"], "picklist_count": "4", "read_only": false, "right_flag": "M", "todo_external_object_index": "1", "todo_histories": [], "todo_index": "1", "todo_variable_id": "42#0", "trigger_list": [], "view_type": "M"}, {"additional_todo_item": "N", "associated_field": "&lt;None&gt;", "category_id": "0", "category_name": "Ungrouped", "current_value": "", "description": "dsa", "mandatory": false, "name": "T2", "picklist": ["V1", "V2", "V3", "V4", "V5"], "picklist_count": "5", "read_only": false, "right_flag": "M", "todo_external_object_index": "2", "todo_histories": [], "todo_index": "2", "todo_variable_id": "42#0", "trigger_list": [], "view_type": "P"}, {"additional_todo_item": "N", "associated_field": "&lt;None&gt;", "category_id": "1", "category_name": "TriggerToDos", "current_value": "", "description": "sad", "mandatory": false, "name": "SetOneTrigger", "picklist": [], "picklist_count": "", "read_only": false, "right_flag": "M", "todo_external_object_index": "3", "todo_histories": [], "todo_index": "3", "todo_variable_id": "42#0", "trigger_list": [{"trigger_index": "1", "trigger_name": "SetOneTrigger", "trigger_type": "S", "var_to_set_list": [{"param": "2023-06-01", "type1": "U", "type2": "C", "variable_id1": "11#0", "variable_id2": "0#0", "variable_name": "NP Date 1"}, {"param": "1.1", "type1": "U", "type2": "C", "variable_id1": "9#0", "variable_id2": "0#0", "variable_name": "NP Float 1"}, {"param": "1", "type1": "U", "type2": "C", "variable_id1": "1#0", "variable_id2": "0#0", "variable_name": "NP Integer 1"}, {"param": "111", "type1": "U", "type2": "C", "variable_id1": "15#0", "variable_id2": "0#0", "variable_name": "NP Long 1"}, {"param": "One", "type1": "U", "type2": "C", "variable_id1": "19#0", "variable_id2": "0#0", "variable_name": "NP Text 1"}, {"param": "true", "type1": "I", "type2": "C", "variable_id1": "63#0", "variable_id2": "0#0", "variable_name": "New Ext NP Boolean 1"}, {"param": "2023-06-01", "type1": "I", "type2": "C", "variable_id1": "62#0", "variable_id2": "0#0", "variable_name": "New Ext NP Date Time 1"}, {"param": "1.1", "type1": "I", "type2": "C", "variable_id1": "61#0", "variable_id2": "0#0", "variable_name": "New Ext NP Float 1"}, {"param": "1", "type1": "I", "type2": "C", "variable_id1": "59#0", "variable_id2": "0#0", "variable_name": "New Ext NP Integer 1"}, {"param": "111", "type1": "I", "type2": "C", "variable_id1": "60#0", "variable_id2": "0#0", "variable_name": "New Ext NP Long 1"}, {"param": "01-06-2023", "type1": "I", "type2": "C", "variable_id1": "64#0", "variable_id2": "0#0", "variable_name": "New Ext NP ShrtDte 1"}, {"param": "One", "type1": "I", "type2": "C", "variable_id1": "58#0", "variable_id2": "0#0", "variable_name": "New Ext NP String 1"}]}], "view_type": "T"}]}, "status": {"description": "", "errormsg": "", "maincode": "0", "suberrorcode": "0", "subject": ""}}}, "status": {"description": "", "errormsg": "", "maincode": "0", "suberrorcode": "0", "subject": ""}}

 Response JSON format of window._unlockWorkitem() method
***********************************************************************************************************************************************************
{
  "data" : {
    "status_list" : [ {
      "registration_no" : "NewNPCase-0000000019-process",
      "status" : "Success",
      "message" : "Workitem unlocked"
    } ]
  },
  "status" : {
    "maincode" : "0",
    "suberrorcode" : "0",
    "subject" : "",
    "description" : "",
    "errormsg" : ""
  }
}
***********************************************************************************************************************************************************/

var isWebViewReady = false;

window.addEventListener("flutterInAppWebViewPlatformReady", function (event) {
    isWebViewReady = true;
});

function triggerMobileCustomCode(requestName, data) {
    //Prepare data for the mobile request
    var argsObj = {
        "RequestId": requestName,
        "Data": data
    };
    var argsJsonString = JSON.stringify(argsObj);
    //Custom trggering of mobile handler
    console.log("Triggering handler");
    return window.flutter_inappwebview.callHandler('customMobileCodeHandler', argsJsonString);
}

function onEventRecievedFromMobile(recievedDataString) {
    //Whenever a event will be triggered from Mobile side
    //This method will be triggered with data and eventName 
    var dataObj = JSON.parse(recievedDataString);
    console.log("Event triggered from Mobile" + recievedDataString);
    var eventId = dataObj["RequestId"];
    var dataFromMobileEnd = dataObj["Data"];
    //The above data will be used for funther operations to be performed by form accordingly
}

// Additional code is below

const SetStyleFuncWithArrayId = (arrField, setting, condition) => {
    arrField.forEach(element => {
        functions.setStyle(element, setting, condition);
    });
}

function consumentType(){
    const individualMandatoryField = ["textbox3", "textbox4", "textbox9", "datepick2", "textbox10",
        "combo10", "textbox12", "combo12", "combo11", "textbox11", "combo13", "combo14",
        "combo15", "combo16", "combo17", "combo18", "textbox13", "textbox14"];

    const companyMandatoryField = ["DepSatTrxLeadsApplicant.companytitle",
            "DepSatTrxLeadsApplicant.companyname",
            "DepSatTrxLeadsApplicant.npwpname",
            "DepSatTrxLeadsApplicant.companyphone",
            "DepSatTrxLeadsApplicant.npwpregistereddate",
            "DepSatTrxLeadsApplicant.companyemail"]

    const valCustType = functions.getValue("DepSatTrxLeadsApplicant.customertype")
    const isIndividual = valCustType === "Individual";
    const condition1 = isIndividual ? "true":"false";
    const condition2 = isIndividual ? "false":"true";

    functions.setStyle("button8","visible",condition1);
    functions.setStyle("button1","visible",condition1);
    functions.setStyle("frame2","visible",condition1);
    functions.setStyle("frame3","visible",condition1);
    functions.setStyle("frame19","visible",condition2);
    SetStyleFuncWithArrayId(individualMandatoryField, "mandatory",condition1);
    SetStyleFuncWithArrayId(companyMandatoryField, "mandatory",condition2);
    functions.updateJSON();
}


function reviewAndVerificationCheck(){
    const arrField = ["textbox3", "textbox4", "textbox9", "datepick2", "textbox10",
        "combo10", "textbox12", "combo12", "combo11", "textbox11", "combo13", "combo14",
        "combo15", "combo16", "combo17", "combo18", "textbox13", "textbox14",
        "DepSatTrxLeadsApplicant.companytitle", "DepSatTrxLeadsApplicant.companyname",
        "DepSatTrxLeadsApplicant.npwpname", "DepSatTrxLeadsApplicant.companyphone",
        "DepSatTrxLeadsApplicant.npwpregistereddate", "DepSatTrxLeadsApplicant.companyemail",
        "DepSatTrxLeadsApplicant.npwpno", "DepSatTrxLeadsApplicant.customertype",
        "DepSatTrxLeadsApplicant.sourceofloads", "DepSatTrxLeadsApplicant.submissiontype",
        "DepSatTrxLeadsApplicant.branchsales", "DepSatTrxLeadsApplicant.bnipartner",
        "DepSatTrxLeadsApplicant.loantype", "DepSatTrxLeadsApplicant.loanpurpose",
        "DepsatTrxLeadsLoan.tenor", "DepsatTrxLeadsLoan.loanamount", "DepSatTrxLeadsApplicant.contractreference",
        "DepsatTrxLeadsBusiness.economysector", "DepsatTrxLeadsBusiness.economysubsector",
        "DepSatTrxDataLeads.averagemonthlysales", "DepsatTrxLeadsBusiness.sincewhen",
        "DepsatTrxLeadsBusiness.address", "DepsatTrxLeadsBusiness.rtrw", "DepsatTrxLeadsBusiness.province",
        "DepsatTrxLeadsBusiness.city", "DepsatTrxLeadsBusiness.district", "DepsatTrxLeadsBusiness.village",
        "DepsatTrxLeadsBusiness.postalcode", "DepsatTrxLeadsBusiness.mobilephone", "button1", "button2"
    ]

    const isReview = functions.getValue('IsReviewWorkstep');
    SetStyleFuncWithArrayId(arrField, "disable",
        			isReview === "true" || isReview === true ? "true" : "false"
			);
    functions.setStyle("frame2", "visible", 
		       		isReview === "true" || isReview === true ? "false" : "true"
		      	);

    functions.updateJSON();
}

const CheckFieldForEnableDisable = (currentPositionCheck, targetDisable) => {
    console.log(currentPositionCheck);
    if(currentPositionCheck === "Select") {
        functions.setStyle(targetDisable, "disable", "true")
        
    } else {
        functions.setStyle(targetDisable, "disable", "false")  
    }
    functions.updateJSON()
}

function enableAndDisableAddressConsumentInformation() {
    const province = functions.getValue('DepSatTrxLeadsApplicant.province');
    CheckFieldForEnableDisable(province,"DepSatTrxLeadsApplicant.city");
    const city = functions.getValue('DepSatTrxLeadsApplicant.city');
    CheckFieldForEnableDisable(city,"DepSatTrxLeadsApplicant.district");
    const district = functions.getValue('DepSatTrxLeadsApplicant.district');
    CheckFieldForEnableDisable(district,"DepSatTrxLeadsApplicant.village");
}

function enableAndDisableAddressBusineesInformation() {
    const province = functions.getValue('DepsatTrxLeadsBusiness.province');
    CheckFieldForEnableDisable(province,"DepsatTrxLeadsBusiness.city");
    const city = functions.getValue('DepsatTrxLeadsBusiness.city');
    CheckFieldForEnableDisable(city,"DepsatTrxLeadsBusiness.district");
    const district = functions.getValue('DepsatTrxLeadsBusiness.district');
    CheckFieldForEnableDisable(district,"DepsatTrxLeadsBusiness.village");
}

function actionDisableRejectReason() {
    const actionVal = functions.getValue('FirstJrmDecision');

    functions.setStyle("DepsatTrxLeadsActionDetail.rejectreason", "disable",
        actionVal !== "Reject" ? "true" : "false");

    functions.updateJSON();
}

function isDigitalSignatureHideButton() {
    const signatureVal = functions.getValue('DepSatTrxLeadsApplicant.isdigitalsignature');

    functions.setStyle("button3", "disable",
        (signatureVal !== true || signatureVal !== "true") ? "true" : "false");

    functions.updateJSON();
}


// custom java (consument information)

function getCityByProvinceIdConsumentInformation() {
    functions.executeServerEvent("","cityDropdown","",true);
    enableAndDisableAddressConsumentInformation();
}

function getDistrictByCityIdConsumentInformation() {
    functions.executeServerEvent("","districtDropdown","",true);
    enableAndDisableAddressConsumentInformation();
    enableAndDisableAddressConsumentInformation();
}

function getVillageByDistrictIdConsumentInformation() {
    functions.executeServerEvent("","villageDropdown","",true);
    enableAndDisableAddressConsumentInformation();
}

 
// custom java (Businees information)

function getCityByProvinceIdBusineesInformation() {
    functions.executeServerEvent("","cityDropdown","",true);
    enableAndDisableAddressBusineesInformation()
}

function getDistrictByCityIdBusineesInformation() {
    functions.executeServerEvent("","districtDropdown","",true);
    enableAndDisableAddressBusineesInformation()
}

function getVillageByDistrictIdBusineesInformation() {
    functions.executeServerEvent("","villageDropdown","",true);
    enableAndDisableAddressBusineesInformation()
}


/*
const consumeApi = async (apiUrl) => {
    await fetch(apiUrl)
        .then(res => {
            if(!res.ok){
                if(res.status === 400){
                    throw new Error("data not found........");
                } else if(res.status === 500){
                    throw new Error("Internal Server Api Error......")
                } else {
                    throw new Error("Network response was not ok.....")
                }
            }
            return res.json();
        }).catch(err => {
            console.error("Error : ", err)
        })
}

const getObjDucakpilAndSikpCheck = () => {
    return {
        fullname : functions.getValue("this is field"),
        identityNumber : functions.getValue("this is field"),
        birthPlace : functions.getValue("this is field"),
        birthDate : functions.getValue("this is field"),
        gender : functions.getValue("this is field"),
        maritalStatus : functions.getValue("this is field"),
        nationality : functions.getValue("this is field")
    };
}


const ducakpilCheck = async () => {
    const ducakpilApiUrl = "https://thisisapi.yuhuu";
    const data = getObjDucakpilAndSikpCheck();
    
    const res = await consumeApi(ducakpilApiUrl);
    if(
        (data.fullname === res.fullname) &&
        (data.identityNumber === res.identityNumber) &&
        (data.birthPlace === res.birthPlace) &&
        (data.birthDate === res.birthDate) &&
        (data.gender === res.gender) &&
        (data.maritalStatus === res.maritalStatus) &&
        (data.nationality === res.nationality)
    ){
        functions.setValue("verificationcontrols_idducakpil","Verified");
    } else {
        functions.setValue("verificationcontrols_idducakpil","UnVerified");
    }
    functions.updateJSON();
}
    
const sikpCheck = async () => {
    const sikpUrl = "https://thisisapi.yuhuu";
    const data = getObjDucakpilAndSikpCheck();
    
    const res = await consumeApi(sikpUrl);
    if(
        (data.fullname === res.fullname) &&
        (data.identityNumber === res.identityNumber) &&
        (data.birthPlace === res.birthPlace) &&
        (data.birthDate === res.birthDate) &&
        (data.gender === res.gender) &&
        (data.maritalStatus === res.maritalStatus) &&
        (data.nationality === res.nationality)
    ){
        functions.setValue("verificationcontrols_idsikp","Verified");
    } else {
        functions.setValue("verificationcontrols_idsikp","UnVerified");
    }
    functions.updateJSON();
}
*/

function individualDetailCredit(){
    functions.setStyle("textbox221", "visible","true"); //tempat lahir
      functions.setStyle("textbox222", "visible","true"); //No KTP
      functions.setStyle("textbox223", "visible","true"); //alamat both on individual or company
      functions.setStyle("DepSatTrxLeadsApplicant.dateofbirth","visible","true"); //tanggal lahir 
      functions.setStyle("combo123", "visible","true"); // jenis kelamin
      functions.setStyle("combo124", "visible","true"); // agama
      functions.setStyle("combo125", "visible","true"); // pekerjaan
      functions.setStyle("combo126", "visible","true"); // status perkawinan
      functions.setStyle("textbox227", "visible","true"); // nomor handphone
      functions.setStyle("combo127", "visible","true"); // Kewarganegaraan
      functions.setStyle("textbox228", "visible","true"); // No Kartu keluarga
      functions.setStyle("textbox229", "visible","true"); //alamat email
      functions.setStyle("textbox231","visible","true"); // Nama gadis ibukanduang
      functions.setStyle("textbox234","visible","true"); // jumlah tanggungan
      functions.setStyle("frame21","visible","true"); // Frame Informasi Pasangan

      functions.setStyle("DepSatTrxLeadsApplicant.companytitle", "visible","false"); // badan usaha
      functions.setStyle("textbox417", "visible","false"); // nama perusahaan
      functions.setStyle("textbox410", "visible","false"); // no telpon perusahan
      functions.setStyle("textbox405", "visible","false"); // no akta pendirian
      functions.setStyle("combo185", "visible","false"); // status kepemilikan tempat usaha
      functions.setStyle("combo186", "visible","false"); // sektor ekonomi
      functions.setStyle("DepSatTrxLeadsApplicant.dateofestablishmentdeed","visible","false"); //tanggal akta pendirian
      functions.setStyle("combo187", "visible","false"); // sub sector economi
}



function companyDetailCredit(){
    functions.setStyle("DepSatTrxLeadsApplicant.companytitle", "visible","true"); // badan usaha
      functions.setStyle("textbox417", "visible","true"); // nama perusahaan
      functions.setStyle("textbox410", "visible","true"); // no telpon perusahan
      functions.setStyle("textbox405", "visible","true"); // no akta pendirian
      functions.setStyle("combo185", "visible","true"); // status kepemilikan tempat usaha
      functions.setStyle("combo186", "visible","true"); // sektor ekonomi
      functions.setStyle("DepSatTrxLeadsApplicant.dateofestablishmentdeed","visible","true"); //tanggal akta pendirian
      functions.setStyle("combo187", "visible","true"); // sub sector economi

      functions.setStyle("textbox221", "visible","false"); //tempat lahir
      functions.setStyle("textbox222", "visible","false"); //No KTP
      functions.setStyle("textbox223", "visible","true"); //alamat both on individual or company
      functions.setStyle("DepSatTrxLeadsApplicant.dateofbirth","visible","false"); //tanggal lahir 
      functions.setStyle("combo123", "visible","false"); // jenis kelamin
      functions.setStyle("combo124", "visible","false"); // agama
      functions.setStyle("combo125", "visible","false"); // pekerjaan
      functions.setStyle("combo126", "visible","false"); // status perkawinan
      functions.setStyle("textbox227", "visible","false"); // nomor handphone
      functions.setStyle("combo127", "visible","false"); // Kewarganegaraan
      functions.setStyle("textbox228", "visible","false"); // No Kartu keluarga
      functions.setStyle("textbox229", "visible","false"); //alamat email
      functions.setStyle("textbox231","visible","false"); // Nama gadis ibukanduang
      functions.setStyle("textbox234","visible","false"); // jumlah tanggungan
      functions.setStyle("frame21","visible","false"); // Frame Informasi Pasangan
}


function hideShowItemDetailCredit() {
    var consumerType = functions.getValue("textbox260");
  
    if (consumerType == "Individual") {
        individualDetailCredit();  

    } else if (consumerType == "Company") {
        companyDetailCredit();
    }
    functions.updateJSON();
  }


function approvalDesicion(){
    var approval = functions.getValue("combo183");

    if (approval == "Proceed"){
        functions.setStyle("combo184","disable","true");    
    }
    else
    {
        functions.setStyle("combo184","disable","false");
    }
    functions.updateJSON();
}


function maritalStatusDetail(){
    var marital = functions.getValue("combo126");

    if (marital == "Menikah"){
        functions.setStyle("frame21","visible","true");
    }
    else
    {
        functions.setStyle("frame21","visible","false");
    }
}


function customerType(){
    const type = functions.getValue("DepSatTrxLeadsApplicant.customertype");
    const isCompany = type === "company";
    const condition1 = isCompany ? "false":"true";
    const condition2 = isCompany ? "true":"false";

    functions.setStyle("frame3","visible",condition1);
    functions.setStyle("frame36","visible",condition2);
    functions.setStyle("DepSatTrxLeadsApplicant.addressdomicile","visible",condition1);
    functions.setStyle("DepSatTrxLeadsApplicant.citydomicile","visible",condition1);
    functions.setStyle("DepSatTrxLeadsApplicant.villagedomicile","visible",condition1);
    functions.setStyle("DepSatTrxLeadsApplicant.postalcodedomicile","visible",condition1);
    functions.setStyle("DepSatTrxLeadsApplicant.rtrwdomicile","visible",condition1);
    functions.setStyle("DepSatTrxLeadsApplicant.districtdomicile","visible",condition1);
    functions.updateJSON();
}


function copyDomicileAddress(){
    const addDom = functions.getValue("DepSatTrxLeadsApplicant.address");
    const citDom = functions.getValue("DepSatTrxLeadsApplicant.city");
    const vilDom = functions.getValue("DepSatTrxLeadsApplicant.village");
    const posDom = functions.getValue("DepSatTrxLeadsApplicant.postalcode");
    const rtDom = functions.getValue("DepSatTrxLeadsApplicant.rtrw");
    const disDom = functions.getValue("DepSatTrxLeadsApplicant.district");

    functions.setValue("DepSatTrxLeadsApplicant.addressdomicile",addDom);
    functions.setValue("DepSatTrxLeadsApplicant.citydomicile",citDom);
    functions.setValue("DepSatTrxLeadsApplicant.villagedomicile",vilDom);
    functions.setValue("DepSatTrxLeadsApplicant.postalcodedomicile",posDom);
    functions.setValue("DepSatTrxLeadsApplicant.rtrwdomicile",rtDom);
    functions.setValue("DepSatTrxLeadsApplicant.districtdomicile",disDom);
}


function domicileCheck(){
    const domCB = functions.getValue("DepSatTrxLeadsApplicant.isdomicilesame");
    if(domCB){
        copyDomicileAddress();
    }
    functions.updateJSON();
}


function guarantorCheck(){
    const guarantorCB = functions.getValue("DepsatTrxLeadsGuarantor.isguarantorneed");
    if(guarantorCB){
        functions.setStyle("frame15","visible","true");
    }
    else{
        functions.setStyle("frame15","visible","false");
    }
    functions.updateJSON();
}
function isCollateralCheck(){
    const isCollateral = functions.getValue("IsCollateral");
    if(isCollateral){
        functions.setStyle("DepSatTrxLeadsCollateral","visible","true");
    }
    else{
        functions.setStyle("DepSatTrxLeadsCollateral","visible","false");
    }
    functions.updateJSON();
}


// form 9 & 10
function hideIndividualCompanyDP() {
    let value = functions.getValue("DepSatTrxLeadsApplicant.customertype");

    if (value == "Individual") {
        functions.setStyle("frame51", "visible", "false");

    } else if (value == "Company") {
        functions.setStyle("frame3", "visible", "false");
        functions.setStyle("frame4", "visible", "false");
    }

    functions.updateJSON();
}

function hideIndividualCompanyAV() {

    let value = functions.getValue("DepSatTrxLeadsApplicant.customertype");

    if (value == "Individual") {
        functions.setStyle("frame30", "visible", "false");

    } else if (value == "Company") {
        functions.setStyle("frame3", "visible", "false");
        functions.setStyle("frame4", "visible", "false");
    }

    functions.updateJSON();
}


function getAge(getBirthDate) {
    let today = new Date();
    let diff = Math.abs(today - getBirthDate);
    let age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    
    return age.toString();
}


function getAgeCustomerDP() {
    let getBirthDate = functions.getValue('DepSatTrxLeadsApplicant.dateofbirth');
    
    functions.setValues({
        'textbox10' : getAge(getBirthDate)
    });

    functions.updateJSON();
}


function getAgeSpouseDP() {
    let getBirthDate = functions.getValue('DepSatTrxLeadsApplicant.spousedob');
    
    functions.setValues({
        'textbox22' : getAge(getBirthDate)
    });

    functions.updateJSON();
}

function getAgeGuarantorDP() {
    let getBirthDate = functions.getValue('DepsatTrxLeadsGuarantor.dateofbirth');
    
    functions.setValues({
        'textbox38' : getAge(getBirthDate)
    });

    functions.updateJSON();
}


function getAgeCustomerAV() {
    let getBirthDate = functions.getValue('DepSatTrxLeadsApplicant.dateofbirth');
    
    functions.setValues({
        'textbox10' : getAge(getBirthDate)
    });

    functions.updateJSON();
}


function getAgeSpouseAV() {
    let getBirthDate = functions.getValue('DepSatTrxLeadsApplicant.spousedob');
    
    functions.setValues({
        'textbox22' : getAge(getBirthDate)
    });

    functions.updateJSON();
}

function getAgeGuarantorAV() {
    let getBirthDate = functions.getValue('DepsatTrxLeadsGuarantor.dateofbirth');
    
    functions.setValues({
        'textbox38' : getAge(getBirthDate)
    });

    functions.updateJSON();
}
function disburseCustomerType(){
    const valCustType = functions.getValue("DepSatTrxLeadsApplicant.customertype")
    if(valCustType === "Individual"){
        functions.setStyle("frame34","visible","false");
        functions.setStyle("frame35","visible","true");
        functions.setStyle("frame3","visible","true");
    } else {
        functions.setStyle("frame34","visible","true");
        functions.setStyle("frame35","visible","false");
        functions.setStyle("frame3","visible","false");
    }
    functions.updateJSON()
}
function disburseGetAgeCustomer(){
    let getBirthDate = functions.getValue('DepSatTrxLeadsApplicant.dateofbirth');
    
    functions.setValues({
        'textbox5' : getAge(getBirthDate)
    });

    functions.updateJSON();
}

function disburseGetAgeSpouse(){
    let getBirthDate = functions.getValue('DepSatTrxLeadsApplicant.spousedob');
    
    functions.setValues({
        'textbox142' : getAge(getBirthDate)
    });

    functions.updateJSON();
}
function disburseGetAgeGuarantor(){
    let getBirthDate = functions.getValue('DepSatTrxLeadsGuarantor.dateofbirth');
    
    functions.setValues({
        'textbox24' : getAge(getBirthDate)
    });

    functions.updateJSON();
}

function individualDataVerificationForm(boolean){
    console.log("individual func masuk");
    functions.setStyle("frame3", "visible", boolean);//frame data pasangan
    functions.setStyle("DepSatTrxLeadsApplicant.placeofbirth", "visible", boolean); //tempat lahir
    functions.setStyle("DepSatTrxLeadsApplicant.identityno", "visible", boolean); //No KTP
    functions.setStyle("DepSatTrxLeadsApplicant.dateofbirth","visible",boolean); //tanggal lahir 
    functions.setStyle("DepSatTrxLeadsApplicant.gender", "visible", boolean); // jenis kelamin
    functions.setStyle("DepSatTrxLeadsApplicant.religion", "visible", boolean); // agama
    functions.setStyle("DepSatTrxLeadsApplicant.occupation", "visible", boolean); // pekerjaan
    functions.setStyle("DepSatTrxLeadsApplicant.maritalstatus", "visible", boolean); // status perkawinan
    functions.setStyle("DepSatTrxLeadsApplicant.mobilephone", "visible", boolean); // nomor handphone
    functions.setStyle("DepSatTrxLeadsApplicant.nationality", "visible", boolean); // Kewarganegaraan
    functions.setStyle("DepSatTrxLeadsApplicant.familyno", "visible", boolean); // No Kartu keluarga
    functions.setStyle("DepSatTrxLeadsApplicant.email", "visible", boolean); //alamat email
    functions.setStyle("DepSatTrxLeadsApplicant.mothermaidenname","visible",boolean); // Nama gadis ibukanduang
    functions.setStyle("DepSatTrxLeadsApplicant.noofdependant","visible",boolean); // jumlah tanggungan
    functions.setStyle("DepSatTrxLeadsApplicant.passportno","visible",boolean); // nomor paspor
    functions.setStyle("DepSatTrxLeadsApplicant.passpportenddate","visible",boolean); // tanggal berakhir paspor
}

function companyDataVerificationForm(boolean){
    console.log("company func masuk");
    functions.setStyle("frame3", "visible", boolean);//frame data pasangan
    functions.setStyle("DepSatTrxLeadsApplicant.companytitle", "visible", boolean); // badan usaha
    functions.setStyle("DepSatTrxLeadsApplicant.companyname", "visible", boolean); // nama perusahaan
    functions.setStyle("DepSatTrxLeadsApplicant.companyphone", "visible", boolean); // no telpon perusahan
    functions.setStyle("DepSatTrxLeadsApplicant.noofestablishmentdeed", "visible", boolean); // no akta pendirian
    functions.setStyle("DepSatTrxLeadsApplicant.companyownershipstatus", "visible", boolean); // status kepemilikan tempat usaha
    functions.setStyle("DepSatTrxLeadsApplicant.economysector", "visible", boolean); // sektor ekonomi
    functions.setStyle("DepSatTrxLeadsApplicant.dateofestablishmentdeed","visible",boolean); //tanggal akta pendirian
    functions.setStyle("DepSatTrxLeadsApplicant.economysubsector", "visible", boolean); // sub sector economi

}


function hideShowDataVerificationForm() {
    var customerType = functions.getValue("DepSatTrxLeadsApplicant.customertype");
    console.log("consumerType", customerType);
  
    if (customerType == "Individual") {
        console.log("individual detected");
      companyDataVerificationForm("false");
      individualDataVerificationForm("true");  

    } else if (customerType == "Company") {
        companyDataVerificationForm("true");
        individualDataVerificationForm("false");
    }
    functions.updateJSON();
 }

function overrideDataVerificationForm() {
    var override = functions.getValue("combo1");
    if (override=="Yes") {
        functions.setStyle("frame1", "disable", "false");
        functions.setStyle("combo1", "disable", "false");
        functions.updateJSON();
    }else if(override=="No"){
        functions.setStyle("frame1", "disable", "true");
        functions.setStyle("combo1", "disable", "false");
        functions.updateJSON();
    }
}

function hideApprovalKCPForm() {
    var costumerType = functions.getValue("DepSatTrxLeadsApplicant.customertype");

    if (costumerType == "Individual") {
        console.log("individual detected");
        functions.setStyle("frame51", "visible", "true");
        functions.setStyle("frame52", "visible", "true");
        functions.setStyle("DepsatTrxLeadsGuarantor.isguarantorneed", "visible", "true");
        functions.setStyle("frame53", "visible", "false");
        functions.updateJSON();
    }else if (costumerType == "Company") {
        functions.setStyle("frame51", "visible", "false");
        functions.setStyle("frame52", "visible", "false");
        functions.setStyle("DepsatTrxLeadsGuarantor.isguarantorneed", "visible", "false");
        functions.setStyle("frame53", "visible", "true");
        functions.updateJSON();
    }
}


function getAge(){
    var costumerType = functions.getValue("DepSatTrxLeadsApplicant.customertype");

    if (costumerType == "Individual") {
        functions.setStyle("DepsatTrxLeadsGuarantor.placeofbirth", "visible", "false");
        functions.setStyle("textbox226", "visible", "true");

        var dobApplicant = functions.getValue("DepSatTrxLeadsApplicant.dateofbirth");
        var dobSpouse = functions.getValue("DepSatTrxLeadsApplicant.spousedob");
        var dobGuarantor = functions.getValue("DepsatTrxLeadsGuarantor.dateofbirth");

        var today = new Date();

        var birthDateApplicant = new Date(dobApplicant);
        var birthDateSpouse = new Date(dobSpouse);
        var birthDateGuarantor = new Date(dobGuarantor);

        var ageApplicant = today.getFullYear() - birthDateApplicant.getFullYear();
        var mApplicant = today.getMonth() - birthDateApplicant.getMonth();
        if (mApplicant < 0 || (mApplicant === 0 && today.getDate() < birthDateApplicant.getDate())) {
            ageApplicant--;
        }
        var ageSpouse = today.getFullYear() - birthDateSpouse.getFullYear();
        var mSpouse = today.getMonth() - birthDateSpouse.getMonth();
        if (mSpouse < 0 || (mSpouse === 0 && today.getDate() < birthDateSpouse.getDate())) {
            ageSpouse--;
        }
        var ageGuarantor = today.getFullYear() - birthDateGuarantor.getFullYear();
        var mGuarantor = today.getMonth() - birthDateGuarantor.getMonth();
        if (mGuarantor < 0 || (mGuarantor === 0 && today.getDate() < birthDateGuarantor.getDate())) {
            ageGuarantor--;
        }
        functions.setValue("textbox180", ageApplicant.toString());
        functions.setValue("textbox253", ageSpouse.toString());
        functions.setValue("textbox226", ageGuarantor.toString());  
        functions.updateJSON();
    }else if(costumerType == "Company"){
        functions.setStyle("DepsatTrxLeadsGuarantor.placeofbirth", "visible", "true");
        functions.setStyle("textbox226", "visible", "false");
        functions.updateJSON();
    }

}

function swapSectionKeputusan(){
    var isInKCP = functions.getValue("IsInHeadofKCP");
    var isInPBP = functions.getValue("IsInPBP");
    var isInBranchManager = functions.getValue("IsInBranchManager");
    var isInJRM = functions.getValue("IsInJRM");

    var kcpAction = functions.getValue("DepSatTrxHOKCPAction.action");
    var pbpAction = functions.getValue("DepSatTrxPBPAction.action");
    var branchManagerAction = functions.getValue("DepSatTrxBranchManagerAction.action");
    var jrmAction = functions.getValue("DepSatTrxJRMAction.action");

    if (isInKCP == "True") {
        functions.setStyle("frame70", "visible", "true");//kcp
        functions.setStyle("frame73", "visible", "false");//pbp
        functions.setStyle("frame72", "visible", "false");//branch manager
        functions.setStyle("frame75", "visible", "false");//jrm

        if (kcpAction == "Reject") {
            functions.setStyle("DepSatTrxHOKCPAction.alasan", "visible", "true");//alasan kcp
        }else{
            functions.setStyle("DepSatTrxHOKCPAction.alasan", "visible", "false");//alasan kcp
        }

        functions.updateJSON();
    }else if(isInPBP == "True"){
        functions.setStyle("frame70", "visible", "false");//kcp
        functions.setStyle("frame73", "visible", "true");//pbp
        functions.setStyle("frame72", "visible", "false");//branch manager
        functions.setStyle("frame75", "visible", "false");//jrm

        if (pbpAction == "Reject") {
            functions.setStyle("DepSatTrxPBPAction.alasan", "visible", "true");//alasan pbp
        }else{
            functions.setStyle("DepSatTrxPBPAction.alasan", "visible", "false");//alasan pbp
        }

        functions.updateJSON();
    }else if(isInBranchManager == "True"){
        functions.setStyle("frame70", "visible", "false");//kcp
        functions.setStyle("frame73", "visible", "false");//pbp
        functions.setStyle("frame72", "visible", "true");//branch manager
        functions.setStyle("frame75", "visible", "false");//jrm

        if (branchManagerAction == "Reject") {
            functions.setStyle("DepSatTrxBranchManagerAction.alasan", "visible", "true");//alasan branch manager
        }else{
            functions.setStyle("DepSatTrxBranchManagerAction.alasan", "visible", "false");//alasan branch manager
        }

        functions.updateJSON();
    }else if(isInJRM == "True"){
        functions.setStyle("frame70", "visible", "false");//kcp
        functions.setStyle("frame73", "visible", "false");//pbp
        functions.setStyle("frame72", "visible", "false");//branch manager
        functions.setStyle("frame75", "visible", "true");//jrm

        if (jrmAction == "Reject") {
            functions.setStyle("DepSatTrxJRMAction.alasan", "visible", "true");//alasan jrm
        }else{
            functions.setStyle("DepSatTrxJRMAction.alasan", "visible", "false");//alasan jrm
        }

        functions.updateJSON();
    }
}

function hideShowAlasan(){
    var kcpAction = functions.getValue("DepSatTrxHOKCPAction.action");
    var pbpAction = functions.getValue("DepSatTrxPBPAction.action");
    var branchManagerAction = functions.getValue("DepSatTrxBranchManagerAction.action");
    var jrmAction = functions.getValue("DepSatTrxJRMAction.action");

    if (kcpAction == "Reject") {   
        functions.setStyle("DepSatTrxHOKCPAction.alasan", "visible", "true");//alasan kcp
    }else{
        functions.setStyle("DepSatTrxHOKCPAction.alasan", "visible", "false");//alasan kcp
    }

    if(pbpAction == "Reject"){
        functions.setStyle("DepSatTrxPBPAction.alasan", "visible", "true");//alasan pbp
    }else{
        functions.setStyle("DepSatTrxPBPAction.alasan", "visible", "false");//alasan pbp
    }

    if(branchManagerAction == "Reject"){
        functions.setStyle("DepSatTrxBranchManagerAction.alasan", "visible", "true");//alasan branch manager
    }else{
        functions.setStyle("DepSatTrxBranchManagerAction.alasan", "visible", "false");//alasan branch manager
    }

    if(jrmAction == "Reject"){   
        functions.setStyle("DepSatTrxJRMAction.alasan", "visible", "true");//alasan jrm 
    }else{
        functions.setStyle("DepSatTrxJRMAction.alasan", "visible", "false");//alasan jrm
    }
    functions.updateJSON();
}

// kalo nyariin custom java tak bawa ke atas, ngikut code firstentry yang lain