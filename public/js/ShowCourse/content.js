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

        $('#example4').DataTable({
            'paging'      : true,
            'lengthChange': false,
            'searching'   : true,
            'ordering'    : true,
            'info'        : true,
            'autoWidth'   : false,
            "pageLength": 5,
            "order": [[ 3, "desc" ]]  //   >
            // "order": [[ 1, "asc" ]] //  <
        })

        $('#example5').DataTable({
            'paging'      : true,
            'lengthChange': false,
            'searching'   : true,
            'ordering'    : true,
            'info'        : true,
            'autoWidth'   : false,
            "pageLength": 3,
            "order": [[ 4, "desc" ]]  //   >
            // "order": [[ 1, "asc" ]] //  <
        })

        $('#example6').DataTable({
            'paging'      : true,
            'lengthChange': false,
            'searching'   : true,
            'ordering'    : true,
            'info'        : true,
            'autoWidth'   : false,
            "pageLength": 5,
            "order": [[ 4, "asc" ]]  //   >
            // "order": [[ 1, "asc" ]] //  <
        })

        $('#example7').DataTable({
            'paging'      : true,
            'lengthChange': false,
            'searching'   : true,
            'ordering'    : true,
            'info'        : true,
            'autoWidth'   : false,
            "pageLength": 10,
            "order": [[ 2, "asc" ]]  //   >
        })
        $('#example8').DataTable({
            'paging'      : true,
            'lengthChange': false,
            'searching'   : true,
            'ordering'    : true,
            'info'        : true,
            'autoWidth'   : false,
            "pageLength": 10,
            "order": [[ 4, "asc" ]]  //   >
        })
    }
    $(function () {
        $('#example1').DataTable()
        setTimeout(loadDatatable, 1000);
    })