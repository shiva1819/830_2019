
        alert();
        console.log(1231231);

        // DATA TYPES.

        // String, Numbers, Boolean, null, undifeind, Object (arrays, objects), Functions 
        
        console.log('asdasda"asdasdasd" 123123123');
        console.log(10 + 10 + '10');
        var demo;
        var demo1;
        console.log(demo);

        var name = "shiva";
        var contact = 90909090;


        var arr  = ['123-g','shiva', 908908908, null, undefined, true, [11,22, [00,-1-1]]];
        // console.log(arr);

        var obj = {
                    "name":'Shiva', 
                    "contact":"090933224", 
                    "fav Color":['red', 'green']
                };

        
        var ACompany = [
            {"name":'Shiva',"contact":"090933224","fav Color":['red', 'green']},
            {"name":'Prasad',"contact":"690933224","fav Color":['Pink', 'green']},
            {"name":'Amit',"contact":"790933224","fav Color":['lime', 'green']},
        ];       


        console.log(ACompany[1]['fav Color']);
        // Array Methods
        ACompany.push({"name":'Added',"contact":"890933224","fav Color":['Crimson', 'green']})
        ACompany.pop();
        ACompany.unshift({"name":'Added',"contact":"890933224","fav Color":['Crimson', 'green']})         
        ACompany.shift();
        

        console.log(ACompany);
        
        ACompany.splice(1,1);

        console.log(ACompany);

        // demo();
        // function demo(){
        //     alert();
        // }

        // demo12();
        // var demo12 = function(){
        //     alert(1222);
        // }


        // Encapsulation. 
        // (function(){
        //     alert(121212);
        // })();