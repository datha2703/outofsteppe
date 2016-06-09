// http://stackoverflow.com/questions/1327756/can-you-have-multiple-document-readyfunction-sections
$(document).ready(function () {
    dashboardInit();
    watchListInit();
});

// http://docs.telerik.com/kendo-ui/controls/layout/splitter/overview
function dashboardInit() {
    $("#horizontal").kendoSplitter({
        panes: [
            { collapsible: true, size: "20%" },
            { collapsible: false },
            { collapsible: true, size: "20%" }
        ],
        orientation: "horizontal"
    });
}