var state_arr = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
  "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
  "Uttar Pradesh", "Uttarakhand", "West Bengal"
];

var s_a = new Array();
s_a[0]="";
s_a[1] = "Alluri Sitarama Raju | Anakapalli | Ananthapuramu | Annamayya | Bapatla | Chittoor | East Godavari | Eluru | Guntur | Kakinada | Konaseema | Krishna | Kurnool | Nandyal | NTR | Palnadu | Parvathipuram Manyam | Prakasam | Srikakulam | Sri Potti Sriramulu Nellore | Sri Sathya Sai | Visakhapatnam | Vizianagaram | West Godavari | YSR Kadapa";

s_a[2] = "Anjaw | Changlang | Dibang Valley | East Kameng | East Siang | Kamle | Kra Daadi | Kurung Kumey | Lepa Rada | Lohit | Longding | Lower Dibang Valley | Lower Siang | Lower Subansiri | Namsai | Pakke Kessang | Papum Pare | Shi Yomi | Siang | Tawang | Tirap | Upper Siang | Upper Subansiri | West Kameng | West Siang";

s_a[3] = "Baksa | Barpeta | Bajali | Biswanath | Bongaigaon | Cachar | Charaideo | Chirang | Darrang | Dhemaji | Dhubri | Dibrugarh | Dima Hasao | Goalpara | Golaghat | Hailakandi | Hojai | Jorhat | Kamrup | Kamrup Metropolitan | Karbi Anglong | Karimganj | Kokrajhar | Lakhimpur | Majuli | Morigaon | Nagaon | Nalbari | Sivasagar | South Salmara-Mankachar | Sonitpur | Tinsukia | Tamulpur | Udalguri | West Karbi Anglong";

s_a[4] = "Araria | Arwal | Aurangabad | Banka | Begusarai | Bhagalpur | Bhojpur | Buxar | Darbhanga | East Champaran | Gaya | Gopalganj | Jamui | Jehanabad | Kaimur | Katihar | Khagaria | Kishanganj | Lakhisarai | Madhepura | Madhubani | Munger | Muzaffarpur | Nalanda | Nawada | Patna | Purnia | Rohtas | Saharsa | Samastipur | Saran | Sheikhpura | Sheohar | Sitamarhi | Siwan | Supaul | Vaishali | West Champaran";

s_a[5] = "Balod | Baloda Bazar | Balrampur | Bastar | Bemetara | Bijapur | Bilaspur | Dantewada | Dhamtari | Durg | Gariaband | Gaurela-Pendra-Marwahi | Janjgir-Champa | Jashpur | Kabirdham | Kanker | Kondagaon | Korba | Koriya | Mahasamund | Mungeli | Narayanpur | Raigarh | Raipur | Rajnandgaon | Sukma | Surajpur | Surguja";

s_a[6] = "North Goa | South Goa";

s_a[7] = "Ahmedabad | Amreli | Anand | Aravalli | Banaskantha | Bharuch | Bhavnagar | Botad | Chhota Udaipur | Dahod | Dang | Devbhoomi Dwarka | Gandhinagar | Gir Somnath | Jamnagar | Junagadh | Kheda | Kutch | Mahisagar | Mehsana | Morbi | Narmada | Navsari | Panchmahal | Patan | Porbandar | Rajkot | Sabarkantha | Surat | Surendranagar | Tapi | Vadodara | Valsad";

s_a[8] = "Ambala | Bhiwani | Charkhi Dadri | Faridabad | Fatehabad | Gurugram | Hisar | Jhajjar | Jind | Kaithal | Karnal | Kurukshetra | Mahendragarh | Nuh | Palwal | Panchkula | Panipat | Rewari | Rohtak | Sirsa | Sonipat | Yamunanagar";

s_a[9] = "Bilaspur | Chamba | Hamirpur | Kangra | Kinnaur | Kullu | Lahaul and Spiti | Mandi | Shimla | Sirmaur | Solan | Una";

s_a[10] = "Bokaro | Chatra | Deoghar | Dhanbad | Dumka | East Singhbhum | Garhwa | Giridih | Godda | Gumla | Hazaribagh | Jamtara | Khunti | Koderma | Latehar | Lohardaga | Pakur | Palamu | Ramgarh | Ranchi | Sahibganj | Seraikela Kharsawan | Simdega | West Singhbhum";

s_a[11] = "Bagalkot | Ballari | Belagavi | Bengaluru Rural | Bengaluru Urban | Bidar | Chamarajanagar | Chikkaballapur | Chikkamagaluru | Chitradurga | Dakshina Kannada | Davanagere | Dharwad | Gadag | Hassan | Haveri | Kalaburagi | Kodagu | Kolar | Koppal | Mandya | Mysuru | Raichur | Ramanagara | Shivamogga | Tumakuru | Udupi | Uttara Kannada | Vijayapura | Yadgir";

s_a[12] = "Alappuzha | Ernakulam | Idukki | Kannur | Kasaragod | Kollam | Kottayam | Kozhikode | Malappuram | Palakkad | Pathanamthitta | Thiruvananthapuram | Thrissur | Wayanad";

s_a[13] = "Agar Malwa | Alirajpur | Anuppur | Ashoknagar | Balaghat | Barwani | Betul | Bhind | Bhopal | Burhanpur | Chhatarpur | Chhindwara | Damoh | Datia | Dewas | Dhar | Dindori | Guna | Gwalior | Harda | Hoshangabad | Indore | Jabalpur | Jhabua | Katni | Khandwa | Khargone | Mandla | Mandsaur | Morena | Narsinghpur | Neemuch | Niwari | Panna | Raisen | Rajgarh | Ratlam | Rewa | Sagar | Satna | Sehore | Seoni | Shahdol | Shajapur | Sheopur | Shivpuri | Sidhi | Singrauli | Tikamgarh | Ujjain | Umaria | Vidisha";

s_a[14] = "Ahmednagar | Akola | Amravati | Aurangabad | Beed | Bhandara | Buldhana | Chandrapur | Dhule | Gadchiroli | Gondia | Hingoli | Jalgaon | Jalna | Kolhapur | Latur | Mumbai City | Mumbai Suburban | Nagpur | Nanded | Nandurbar | Nashik | Osmanabad | Palghar | Parbhani | Pune | Raigad | Ratnagiri | Sangli | Satara | Sindhudurg | Solapur | Thane | Wardha | Washim | Yavatmal";

s_a[15] = "Bishnupur | Chandel | Churachandpur | Imphal East | Imphal West | Jiribam | Kakching | Kamjong | Kangpokpi | Noney | Pherzawl | Senapati | Tamenglong | Tengnoupal | Thoubal | Ukhrul";

s_a[16] = "East Garo Hills | East Jaintia Hills | East Khasi Hills | North Garo Hills | Ri-Bhoi | South Garo Hills | South West Garo Hills | South West Khasi Hills | West Garo Hills | West Jaintia Hills | West Khasi Hills";

s_a[17] = "Aizawl | Champhai | Hnahthial | Khawzawl | Kolasib | Lawngtlai | Lunglei | Mamit | Saitual | Serchhip";

s_a[18] = "Chümoukedima | Dimapur | Kiphire | Kohima | Longleng | Mokokchung | Mon | Niuland | Noklak | Peren | Phek | Shamator | Tseminyü | Tuensang | Wokha | Zünheboto";

s_a[19] = "Angul | Balangir | Balasore | Bargarh | Bhadrak | Boudh | Cuttack | Deogarh | Dhenkanal | Gajapati | Ganjam | Jagatsinghpur | Jajpur | Jharsuguda | Kalahandi | Kandhamal | Kendrapara | Keonjhar | Khordha | Koraput | Malkangiri | Mayurbhanj | Nabarangpur | Nayagarh | Nuapada | Puri | Rayagada | Sambalpur | Subarnapur | Sundargarh";

s_a[20] = "Amritsar | Barnala | Bathinda | Faridkot | Fatehgarh Sahib | Fazilka | Ferozepur | Gurdaspur | Hoshiarpur | Jalandhar | Kapurthala | Ludhiana | Malerkotla | Mansa | Moga | Muktsar | Nawanshahr | Pathankot | Patiala | Rupnagar | Sangrur | SAS Nagar | Tarn Taran";

s_a[21] = "Ajmer | Alwar | Banswara | Baran | Barmer | Bharatpur | Bhilwara | Bikaner | Bundi | Chittorgarh | Churu | Dausa | Dholpur | Dungarpur | Hanumangarh | Jaipur | Jaisalmer | Jalore | Jhalawar | Jhunjhunu | Jodhpur | Karauli | Kota | Nagaur | Pali | Pratapgarh | Rajsamand | Sawai Madhopur | Sikar | Sirohi | Sri Ganganagar | Tonk | Udaipur";

s_a[22] = "Gangtok | Gyalshing | Mangan | Namchi | Pakyong | Soreng | Tadong | Rangpo";

s_a[23] = "Ariyalur | Chengalpattu | Chennai | Coimbatore | Cuddalore | Dharmapuri | Dindigul | Erode | Kallakurichi | Kanchipuram | Kanniyakumari | Karur | Krishnagiri | Madurai | Mayiladuthurai | Nagapattinam | Namakkal | Perambalur | Pudukkottai | Ramanathapuram | Ranipet | Salem | Sivaganga | Tenkasi | Thanjavur | Theni | Thoothukudi | Tiruchirappalli | Tirunelveli | Tirupathur | Tiruppur | Tiruvallur | Tiruvannamalai | Tiruvarur | Vellore | Viluppuram | Virudhunagar";

s_a[24] = "Adilabad | Bhadradri Kothagudem | Hanumakonda | Hyderabad | Jagtial | Jangaon | Jayashankar Bhupalpally | Jogulamba Gadwal | Kamareddy | Karimnagar | Khammam | Komaram Bheem Asifabad | Mahabubabad | Mahabubnagar | Mancherial | Medak | Medchal–Malkajgiri | Mulugu | Nagarkurnool | Nalgonda | Narayanpet | Nirmal | Nizamabad | Peddapalli | Rajanna Sircilla | Rangareddy | Sangareddy | Siddipet | Suryapet | Vikarabad | Wanaparthy | Warangal | Yadadri Bhuvanagiri";

s_a[25] = "Dhalai | Gomati | Khowai | North Tripura | Sepahijala | South Tripura | Unakoti | West Tripura";

s_a[26] = "Agra | Aligarh | Ambedkar Nagar | Amethi | Amroha | Auraiya | Ayodhya | Azamgarh | Baghpat | Bahraich | Ballia | Balrampur | Banda | Barabanki | Bareilly | Basti | Bhadohi | Bijnor | Budaun | Bulandshahr | Chandauli | Chitrakoot | Deoria | Etah | Etawah | Farrukhabad | Fatehpur | Firozabad | Gautam Buddha Nagar | Ghaziabad | Ghazipur | Gonda | Gorakhpur | Hamirpur | Hapur | Hardoi | Hathras | Jalaun | Jaunpur | Jhansi | Kannauj | Kanpur Dehat | Kanpur Nagar | Kasganj | Kaushambi | Kushinagar | Lakhimpur Kheri | Lalitpur | Lucknow | Maharajganj | Mahoba | Mainpuri | Mathura | Mau | Meerut | Mirzapur | Moradabad | Muzaffarnagar | Pilibhit | Pratapgarh | Prayagraj | Rae Bareli | Rampur | Saharanpur | Sambhal | Sant Kabir Nagar | Shahjahanpur | Shamli | Shravasti | Siddharthnagar | Sitapur | Sonbhadra | Sultanpur | Unnao | Varanasi";

s_a[27] = "Almora | Bageshwar | Chamoli | Champawat | Dehradun | Haridwar | Nainital | Pauri Garhwal | Pithoragarh | Rudraprayag | Tehri Garhwal | Udham Singh Nagar | Uttarkashi";

s_a[28] = "Alipurduar | Bankura | Birbhum | Cooch Behar | Dakshin Dinajpur | Darjeeling | Hooghly | Howrah | Jalpaiguri | Jhargram | Kalimpong | Kolkata | Malda | Murshidabad | Nadia | North 24 Parganas | Paschim Bardhaman | Paschim Medinipur | Purba Bardhaman | Purba Medinipur | Purulia | South 24 Parganas | Uttar Dinajpur";

function print_state(state_id){
	// given the id of the <select> tag as function argument, it inserts <option> tags
	var option_str = document.getElementById(state_id);
	option_str.length=0;
	option_str.options[0] = new Option('Select State','');
	option_str.selectedIndex = 0;
	for (var i=0; i<state_arr.length; i++) {
		option_str.options[option_str.length] = new Option(state_arr[i],state_arr[i]);
	}
}

function print_city(city_id, city_index){
	var option_str = document.getElementById(city_id);
	option_str.length=0;	// Fixed by Julian Woods
	option_str.options[0] = new Option('Select City','');
	option_str.selectedIndex = 0;
	var city_arr = s_a[city_index].split("|");
	for (var i=0; i<city_arr.length; i++) {
		option_str.options[option_str.length] = new Option(city_arr[i],city_arr[i]);
	}
}
