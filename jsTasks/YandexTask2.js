function Y(nums,k){
  /*nums.forEach(function (item1){
   console.log(item1);
   m = 0;
    if (item1+nums[nums.indexOf(item1)+m] == k)
     return true;
    else m+=1;
    nums.splice(nums.indexOf(item1)+1, nums.length-1);  
});
 //console.log(s);
 return false;*/
for (var i = 0; i<nums.length;i++)
  for (var j = i+1; j<nums.length;j++)
    if (nums[i]+nums[j] == k)
      return true;
return false;
}

Y([0,0], 0)