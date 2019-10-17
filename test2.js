<script type="text/javascript">

        function getUrlVars(){

            var vars = [], hash;
            var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
            for(var i = 0; i < hashes.length; i++)
            {
                hash = hashes[i].split('=');
                vars.push(hash[0]);
                vars[hash[0]] = hash[1];
            }
            return vars;
        }

        var get_parameters = getUrlVars();
        if(get_parameters['rpath'] != undefined && get_parameters['rpath'] != 'default'){
            var redirectPath = get_parameters['rpath'];
            document.getElementById('redirectpg').href = redirectPath;
        }else{

            document.getElementById('redirectpg').href = "index.php";

        }

    </script>
