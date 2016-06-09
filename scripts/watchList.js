function watchListInit() {
    $("#dashboardWatchList").kendoListView({
        dataSource: watchListItems,
        pageable: true,
        template: kendo.template($("#watch_list_item_template").html())
    });
}

var watchListItems = new kendo.data.DataSource({
    transport: {
        read: {
            url: "http://demos.kendoui.com/service/Products",
            dataType: "jsonp"
        }
    }
});
