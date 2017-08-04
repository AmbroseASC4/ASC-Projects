var id = "e4dafb5c"
var key = "6b35211367a62a9be8b28786ee88950b"

var foodURL= "https://api.nutritionix.com/v1_1/search/big%20mac?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&"+
             "appId=" + id + "&appKey=" + key;

$.ajax({
    url: foodURL,
    success: function(data){
        //console.log(data);
        var food = data.hits[0];
        var name = food.fields.item_name;
        var cals = food.fields.nf_calories;

        $("body").append("<h2> This " + name + " has " + cals + " kcals!!!</h2>");
    }
});