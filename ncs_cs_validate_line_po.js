/**
 *@NApiVersion 2.x
 *@NScriptType ClientScript
 */
define(['N/currentRecord', 'N/record', 'N/search'],
    function(currentRecord, record, search) {
        function pageInit(context) {

        }
        function saveRecord(context) {
			
		}
        function validateField(context) {

        }
        function fieldChanged(context) {
			
        }
        function postSourcing(context) {
			
        }
        function lineInit(context) {
			
        }
        function validateDelete(context) {

        }
        function validateInsert(context) {
			
        }
        function validateLine(context) {
			if ('item' ==  context.sublistId) {
				var curRec = context.currentRecord
				
				var sublistValue = curRec.getCurrentSublistValue({
					sublistId: 'item',
					fieldId: 'custcol_ncs_detail_description'
				});

				if ( sublistValue.length > 0 ) {
					return true;
				}
				else {
					alert('Please enter a value for Detail Description');
					return false;
				}
			}else{
				return true;
			}
        }
        function sublistChanged(context) {

        }
		
        return {
			// pageInit: pageInit,
            // fieldChanged: fieldChanged,
            // postSourcing: postSourcing,
            // sublistChanged: sublistChanged,
            // lineInit: lineInit,
            // validateField: validateField,
            validateLine: validateLine,
            // validateInsert: validateInsert,
            // validateDelete: validateDelete,
            // saveRecord: saveRecord
        };
    });