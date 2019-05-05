function Yandex(nums1, nums2) {
  nums1.forEach(function(item){
    console.log(item);
    for (var i = 0;i<nums2.length;i++)
     //console.log(nums1.indexOf(item),nums1.length);
      if ((nums2[i]>item) && (nums2[i]<nums1[nums1.indexOf(item)+1]))
        {
        console.log(item, nums2[i]);
        nums1.splice(nums1.indexOf(item)+1,0,nums2[i]);
       

        }
  });

}
//Yandex([1,2,5,15,78],[3,4,10,14,70,91]);

function Yandex2(nums1,m, nums2,n) {
    
    nums1.forEach(function(item2){
     nums2.forEach(function(item){
      if ((item<=item2)&&(item>=nums1[nums1.indexOf(item2)-1]))
      nums1.splice(nums1.indexOf(item2),0,item);
      });
  }); 
   
    nums1.length = nums1.length - n;
    nums2.forEach(function(item){
      if (item>nums1[nums1.length-1])
      nums1.push(item);
      if (item<nums1[0])
      nums1.splice(0,0,item);
      });
    /*
    for (var i = 0;i<nums1.length;i++)
     //console.log(nums1.indexOf(item),nums1.length);
      if ((nums1[i]<item) && (item<nums1[i+1]))
      //(item == nums2[nums2.length-1])))
        {
        console.log(item,nums1, nums2);
        nums1.splice(nums1.indexOf(nums1[i+1]),0,item);
        }*/
     
 
  //nums1.length = nums1.length - n;

console.log(nums1,nums2);
}
function Y3 (nums1,m, nums2,n){
nums1.length = m;

nums1 = nums1.concat(nums2.slice(0));
nums1.sort();
console.log(nums1);
}
//Yandex2([1,2,5,15,78,0,0,0,0,0,0,0,0],5,[0,3,4,10,14],8);
//Y3([46,55,88,0,0,0,0], 3, [18,29,80,90] ,4);

function hj(nums1,m, nums2,n){
  nums1.length = m;
  let i = nums1.length - 1;
  // указатель на конец массива b
  let j = nums2.length - 1;
  // указатель на конец результирующего массива
  let end = nums1.length + nums2.length - 1;
  
  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[end] = nums1[i];
      i--;
    } else {
      nums1[end] = nums2[j];
      j--;
    }
    end--;
  }
  console.log(nums1);
}
hj([46,55,88,0,0,0,0], 3, [18,29,80,90] ,4);