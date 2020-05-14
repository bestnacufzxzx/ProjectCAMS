    function loadDatatable(){
        $('#example2').DataTable({
            'paging'      : true,
            'lengthChange': false,
            'searching'   : true,
            'ordering'    : true,
            'info'        : true,
            'autoWidth'   : false,
            "pageLength": 5
        })

        $('#example3').DataTable({
            'paging'      : true,
            'lengthChange': false,
            'searching'   : true,
            'ordering'    : true,
            'info'        : true,
            'autoWidth'   : false,
            "pageLength": 8,
            "order": [[ 1, "desc" ]]  //   >
            // "order": [[ 1, "asc" ]] //  <
        })
    }
    $(function () {
        $('#example1').DataTable()
        setTimeout(loadDatatable, 1000);
    })