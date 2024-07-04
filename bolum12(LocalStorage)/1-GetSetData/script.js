/* 
localStorage, JavaScriptdə müstəqil istifadəçinin veb brauzerində yerləşdirilmiş verilər bazasıdır ki, 
onun köməyi ilə istifadəçilər yerli şəkildə açdığı brauzer pəncərələrində veri çiftlərini saxlaya bilərlər. 
Bu, server tərəfindən verilən yaddaş daxilində və ya kukilər tərəfindən dəstəklənmədən veriləri daimi 
şəkildə saxlamağa imkan verir. Aşağıda localStorage istifadə etmənin bəzi yaygın məqsədləri göstərilib:

Məlumatların Müvəqqəti Saxlanılması: localStorage, verilərin istifadəçilərin brauzerində yerli şəkildə 
saxlanılması üçün istifadə edilir. Bu, istifadəçinin brauzeri bağladıqdan sonra və ya səhifəni yenidən 
yüklədikdə belə verilərin mövcudluğunu təmin edir. Bu, istifadəçi tərəfindən tənzimləmələr, quraşdırmalar 
və ya sessiya ilə əlaqədar məlumatların daimi saxlanılması üçün faydalıdır.

Offlayn Funksionallıq: Offline funksionallıq tələb edən tətbiqlər, veriləri yerli şəkildə saxlayaraq 
istifadəçinin yenidən onlayn olmasından sonra onu serverlə sinxronlaşdırmağa imkan verən localStorage-dan 
istifadə edə bilərlər. Bu xüsusən proqressiv veb tətbiqlər və mobil tətbiqlər üçün faydalıdır.

Önbellekləmə: Sıxça istifadə olunan veriləri, məsələn, API cavablarını və ya digər resursları önbellekləmək 
üçün localStorage-dan istifadə edə bilərsiniz. Bu, təkrarlı şəbəkə müraciətlərinin təkrarlanmasının qarşısını 
almağa kömək edərək tətbiqin performansını və tərtibatlı cavab verdiyini artırmağa kömək edir.

İstifadəçi Təsdiqlənməsi: 
Bir istifadəçi daxil olanda, təsdiq edilmə tokenləri və ya sessiya məlumatlarını localStorage-da saxlaya 
bilərsiniz ki, istifadəçini müxtəlif səhifələrdə tokeni təkrar təqdim etməyə ehtiyac duymadan təsdiq etmək mümkün olsun.

İstifadəçi Daxili Məlumatları: localStorage, forma və ya mətn redaktorlarında istifadəçi tərəfindən daxil edilən 
məlumatları saxlamaq üçün istifadə edilə bilər. Bu, istifadəçinin səhvən brauzeri bağlayıb və ya səhifədən yayındıqdan 
əvvəl məlumat itkisinin qarşısını almağa kömək edir.

İstifadəçi Təcrübəsinin İyiləşdirilməsi: localStorage-dan istifadə edərək istifadəçiyə xüsusi məlumatları daxil etmək, 
onun tənzimləyəcəyi təcrübəni tənzimləməyə imkan verir. Bu, mövcud olan mövzuları, dil tənzimləmələrini və ya digər 
xüsusi tənzimləmə variantlarını əhatə edə bilər.

Performans: Veriləri localStorage-dan əldə etmək ümumiyyətlə şəbəkə müraciətlərini serverə göndərməyə nisbətən sürətlidir. 
Bu, tətbiqin ümumi performansını yaxşılaşdırmağa kömək edə bilər.
*/
localStorage.setItem('name','Scarlett');
localStorage.setItem('age','35');


let firstName = localStorage.getItem('name');
let age = localStorage.getItem('age');
console.log(firstName,age);

//change the values by different ways
localStorage.setItem('name','Megan Fox');
localStorage.age = 36;

firstName = localStorage.getItem('name');
age = localStorage.getItem('age');

console.log(firstName,age);

//bunlarin en gozel ozelliyi sehifeni refresh edende itmemesidir


