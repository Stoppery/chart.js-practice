let years = [
	'1980', '1981', '1982', '1983',
	'1984', '1985', '1986', '1987',
	'1988', '1989', '1990', '1991',
	'1992', '1993', '1994', '1995',
	'1996', '1997', '1998', '1999',
	'2000', '2002', '2003', '2004',
	'2005', '2006', '2007', '2008',
	'2009', '2010', '2011', '2012',
	'2013', '2014', '2015', '2016',
	'2017', '2018', '2019'
];

let data1 ={
	datas: [
		65, 69, 57, 80, 66, 80, 66, 62, 74, 68,
		75, 98, 70, 72, 70, 89, 75, 95, 74, 98,
		74, 89, 82, 69, 76, 58, 65, 76, 75, 80,
		71, 59, 54, 91, 93, 90, 78, 91, 84, 83
	],
	days: [
		178, 191, 196, 188, 205, 182, 206,
		194, 189, 197, 186, 195, 204, 181,
		187, 178, 210, 178, 209, 189, 196,
		192, 205, 189, 202, 175, 210, 181,
		188, 188, 176, 168, 180, 185, 194,
		191, 191, 183, 180, 189
	]
};

let data2 = {
	datas: [
		65, 60, 70, 83, 52, 41, 53, 83,  44, 56,
		70, 55, 54, 36, 45, 64, 83, 66,  72, 80,
		45, 55, 68, 65, 93, 49, 57, 71,  69, 73,
		73, 61, 77, 81, 71, 51, 44, 69, 106, 71
	],
	days: [
		181, 188, 192, 201, 182, 180, 109, 204,
		160, 184, 174, 182, 172, 185, 189, 198,
		197, 186, 212, 190, 185, 191, 197, 185,
		210, 174, 198, 193, 198, 188, 201, 179,
		189, 206, 192, 183, 190, 198, 190, 192
	]
};

let data3 = {
	datas: [
		123, 113, 119, 114, 121, 114, 116, 125,
		74, 129, 137, 104, 161,  99, 126,  94,
		112, 119, 137, 179,  85, 100, 143, 124, 
		144, 143, 117, 127, 120, 114, 115,  99, 
		138, 153, 114,  95,  90, 139, 128, 152
	],
	days: [
		203, 182, 181, 197, 125, 181, 119, 187,
		157, 181, 149, 171, 168, 174, 188, 190,
		178, 171, 209, 196, 160, 144, 198, 197,
		206, 174, 183, 186, 204, 195, 188, 193,
		171, 206, 177, 202, 195, 177, 179, 187
	]
};

let data5 = {
	datas: [
		277, 171, 139, 164, 244, 201, 203, 160,
		189, 233, 188, 171, 177, 169, 245, 186,
		253, 284, 160, 222, 170, 190, 209, 121,
		171, 266, 229, 185, 189, 199, 182, 215,
		200, 206, 257, 201, 145, 210, 235, 195
	],
	days: [
		237, 196, 201, 215, 199, 201, 137, 225,
		197, 218, 185, 213, 213, 215, 226, 198,
		222, 227, 226, 222, 204, 205, 207, 200,
		219, 236, 215, 204, 217, 180, 216, 223,
		202, 233, 217, 219, 203, 220, 213, 216
	]
}
let data6 = {
	datas: [
		108, 117, 113, 111, 122, 124, 116, 159,
		156, 160, 153,  96, 129, 115, 198, 149,
		110, 207, 141, 232, 210, 220,  226, 129, 
		148, 289, 156, 161, 168, 154, 104, 143, 
		165, 221, 175, 259, 162, 153, 161, 134
	],
	days: [
		177, 159, 117, 172, 117, 182,  85, 198,
		183, 186, 164, 166, 172, 175, 205, 148,
		177, 187, 195, 183, 184, 183, 184, 170,
		199, 186, 152, 185, 173, 189, 196, 193,
		180, 176, 179, 169, 181, 156, 178, 169
	]
};

let middleP = {
	winter : [
		-4.08, -5.62, -5.02,  -4.3, -4.68,
		-5.18, -3.72, -5.12, -5.28, -4.36,
		-4.42,  -3.2, -5.22, -5.14, -4.38,
		-3.38, -3.22,  -3.5, -5.52, -5.14,
		-5.94,  -5.5, -4.94, -4.12, -3.34,
		-3.7, -4.56,  -4.5,  -3.6, -4.56,
		-3.88, -4.48, -4.66,  -3.3, -4.06,
		-3.48, -5.68, -2.64, -3.76, -4.38
	],
	spring : [
		3.2, 5.1, 4.7, 3.9, 5.3, 3.5, 5.7, 4.2,
		4.5, 4.5, 5.9, 4.2, 5.3,   4, 4.1, 4.8,
		5.7, 5.3, 5.1, 3.2, 4.4,   5, 5.4, 5.2,
		5.1,   5, 4.7, 4.4, 5.5, 5.6, 4.2, 4.7,
		5.6, 5.1, 5.8, 4.4, 5.4, 5.6, 4.8, 5.3
	],
	summer : [
		11.9, 12.2, 11.9, 12.1, 11.7, 10.2,
		12.9, 11.8, 12.8,   13, 12.6, 11.5,
		11.1, 12.1, 12.8, 11.5, 12.5, 11.5,
		12.5, 12.1,   12, 11.5, 11.3, 12.7,
		11.8, 12.7, 12.9, 11.7, 13.2,   13,
		12.6, 13.5, 13.1, 13.9, 12.8, 12.8,
		13.5, 12.9,   13, 12.5
	],
	whole : [
		2.4, 2.5, 2.5, 2.7, 2.8, 1.7, 3.5, 2.2,
		2.6, 3.1, 3.4, 3.1, 2.3, 2.4,   3, 3.1,
		3.8, 3.3, 2.4, 2.2, 2.1, 2.3, 2.5, 3.3,
		3.2, 3.4, 2.9, 2.6, 3.6, 3.2,   3, 3.1,
		3.2, 3.7, 3.5, 3.4, 2.7, 3.9, 3.5,   3
	]
};

let middleN = {
	winter : [
		-11.8, -13.4, -12.2, -11.8, -12.3,
		-12.8, -11.3, -12.9, -12.9, -10.7,
		-10.3,  -9.7, -12.5, -13.3, -10.3,
		-9.1,  -8.3,  -9.6, -12.7,   -11,
		-13.3, -12.5, -11.9,  -9.9, -10.2,
		-9.7, -10.6, -11.4,  -9.2, -10.6,
		-9.8, -10.9, -10.9,  -9.4, -10.9,
		-9.8, -12.2,  -7.9,  -9.9, -11.1
	],
	spring : [
		-0.2, 3.6, 2.2, 2.2,   3, 1.8, 3.7,
		2, 2.3, 3.2, 4.8, 1.9, 3.4,   2,
		2.4, 2.9, 3.5, 2.2, 2.5, 1.9, 4.1,
		4.1, 4.1, 3.2,   3, 2.6, 1.9, 2.6,
		3.6, 9.5,   2, 2.7, 4.5, 3.6, 4.5,
		2.4, 3.8, 3.2, 2.5, 3.8
	],
	summer : [
		10.8, 11.5, 10.3, 10.7, 10.2,  8.8,
		11.8,  9.9, 10.5, 11.9, 10.6, 10.3,
		9.2, 10.7, 11.1, 10.6,   11, 10.3,
		11.1, 10.1,   11, 10.7, 10.3, 11.5,
		10.7, 11.3, 11.9, 10.1, 12.3,  7.6,
		11.2, 12.2, 11.9, 12.1, 12.2, 11.9,
		12.2, 11.9,   11, 11.1
	],
	whole : [
		-3.2, -2.9,   -3, -2.7, -2.8, -3.8,
		-1.8, -3.5, -3.2, -1.6, -1.3, -1.8,
		-3.1, -3.5, -1.8, -1.2, -0.5, -1.7,
		-3, -2.5, -2.9, -2.5, -2.3, -1.3,
		-1.7, -1.4, -1.9, -2.5, -0.6, -0.2,
		-1.6, -1.7, -1.3, -0.8, -1.3, -1.3,
		-2.1, -0.2, -1.6, -1.8
	]
};


let middleU = {
	winter : [
		-13.4, -14.3, -16.8,  -8.4, -16.3,
		-14.8, -11.8, -15.6, -11.2,  -9.9,
		-11.6, -13.8, -10.7, -11.2, -13.2,
		-8.6, -14.2, -12.1, -15.4, -13.3,
		-15.2, -13.8, -10.8, -11.4, -12.5,
		-11.6, -14.6, -10.2, -10.9, -16.3,
		-16.1, -11.1,   -15, -10.4, -12.7,
		-9.5, -13.5,  -9.5,   -14, -10.8
	],
	spring : [
		6,   8, 9.4, 5.6,  4.1, 7.1, 5.7,
		5.2,   6, 6.1, 8.7,  8.4, 5.4, 7.1,
		8.1, 7.6, 5.5, 9.9,  5.3, 7.8,   9,
		9.6, 7.7, 9.4, 8.9,  8.1,   7, 8.4,
		6.9, 6.9, 6.3,  11, 10.2, 6.7, 8.3,
		10.8, 9.8, 9.4, 7.9,  7.7
	],
	summer : [
		13.7, -10.9,   13, 12.9, 13.9, 13.5,
		14.1,  14.4, 13.5, 13.3, 13.9, 14.7,
		13,  14.4, 14.2, 14.3, 12.4, 12.5,
		7.5,  13.2, 13.4, 13.8, 13.4, 14.2,
		12.7,  14.8, 13.4, 14.4, 13.3, 14.2,
		12.5,  12.2,   15, 14.1, 13.3, 13.8,
		15.8,  12.9, 13.8, 14.7
	],
	whole : [
		-1.8, -5.7,    0,  0.4, -3.6, -2.3,   -1,
		-2.9, -0.7, -0.1, -0.1, -1.1, -0.8, -0.2,
		-1,  1.2, -2.6, -0.4, -3.5, -1.4,   -2,
		-1.1, -0.1,  0.2, -0.9,   -0, -2.2,  0.6,
		-0.4, -2.9, -3.3,  0.3, -1.2,   -0, -0.9,
		1.4, -0.4,  0.8, -1.6,  0.2
	]
};


let middleK = {
	winter : [
		-8.9, -11.5,   -11,  -8.2, -9.4,  -9.7,
		-7.6, -10.9, -10.8,  -8.2, -8.8,  -8.6,
		-10.6,   -11,  -8.7,  -7.4, -5.8,    -7,
		-10.8,  -9.9,  -9.8, -10.5,  -11,  -7.8,
		-8.8,  -7.8,  -9.8,  -8.5, -7.9, -10.3,
		-8.1,  -9.8,  -9.3,  -8.5, -7.5,  -7.9,
		-10.1,  -6.8,  -6.4,    -9
	],
	spring : [
		2.2, 6.2, 3.9, 3.8, 5.6, 4.3, 6.6, 4.6,
		5, 6.3, 6.7, 4.8, 5.7, 4.1, 5.6, 4.3,
		5.4,   6, 4.7, 3.6, 6.8, 6.6, 6.4, 4.9,
		5.2, 4.9, 4.5, 4.8, 5.9, 6.2, 4.4, 4.9,
		6.7, 6.1, 6.4, 4.6, 6.4, 5.7, 5.7, 6.2
	],
	summer : [
		13.1, 13.6,   12, 12.8, 12.3, 10.6,
		13.9, 11.8, 12.7, 14.1, 12.6, 12.2,
		11.2, 12.4, 13.7, 12.6,   13, 12.5,
		12.9, 12.3,   13, 12.1, 13.2, 14.7,
		12.7, 13.5, 14.5, 12.6, 14.4, 13.2,
		13.9, 13.8, 13.7, 13.9, 14.2, 13.3,
		14.7, 13.9, 13.2, 13.1
	],
	whole : [
		-0.6, -0.8, -1.5,  0.1, -0.2, -1.1,  1.3,
		-1.3,   -1,    1,  0.4, -0.1,   -1, -1.4,
		0.5,  0.6,  1.7,  1.1,   -1,   -1,    0,
		-0.3, -0.6,    1,  0.1,  0.7, -0.1,  0.1,
		1.1, -0.3,  0.5, -0.2,  0.5,  0.8,  1.4,
		0.5,  0.2,  1.5,  1.5,  0.3
	]
};

let middleE = {
	winter : [
		-12.2, -14.1, -13.2, -11.4, -11.8,
		-12.5, -11.5, -13.6,   -13, -10.8,
		-11.4, -10.5, -13.1, -13.1, -11.2,
		-10.5,  -9.6, -10.2, -13.9,   -12,
		-12.8, -12.8, -12.7, -10.9, -11.3,
		-10.3, -11.5,   -11, -10.2, -12.4,
		-11.2, -11.7, -11.8, -11.3, -10.7,
		-10.3, -12.5,  -9.2,  -9.5, -11.8
	],
	spring : [
		0.5, 4.2, 2.3, 2.1, 4.3, 2.9, 4.9, 2.7,
		3, 4.7,   5, 3.3, 4.2, 2.2, 4.6, 3.2,
		4.1, 3.5, 2.8,   3, 5.5, 5.3, 5.2, 3.1,
		3, 3.7, 3.1, 3.4, 4.2, 4.8, 2.5, 3.4,
		5.1, 5.1, 5.1, 2.6, 4.9, 3.9, 3.7, 4.9
	],
	summer : [
		10.8, 11.6,  9.6, 10.9, 10.4,    9,
		11.5,  9.8, 10.6, 11.6,  9.8, 10.5,
		9.4, 10.4, 11.4, 10.6, 10.8, 10.5,
		10.9, 10.1, 11.3, 11.1, 10.9, 12.1,
		10.9, 11.3, 12.7, 10.8, 12.8, 11.3,
		12, 11.9, 11.8, 11.9, 12.5, 11.6,
		12.9, 12.2,   11, 11.1
	],
	whole : [
		-3.3, -3.1, -3.6, -2.4, -2.2, -3.3,
		-1.6, -3.7, -3.1, -1.3,   -2, -1.8,
		-3.1, -3.4, -1.6, -1.8, -1.1, -1.6,
		-3.5, -2.7, -2.2, -2.3, -2.3, -1.7,
		-2.2, -1.4, -1.8,   -2, -0.9, -2.2,
		-1.9,   -2, -1.7, -1.4, -0.9, -1.6,
		-1.8, -0.6, -1.1, -1.9
	]
};

let ust = {
	red_pol_days: [
		55, 45, 102, 112, 18, 85, 52, 93, 118, 121,
		73, 70, 132, 111, 73, 87, 26, 66, 112,  43,
		88, 50,  78,  16, 89, 82, 75, 89,  57,  43,
		0, 53,  88,  55, 35, 34, 69, 90,  15,  62,
		39
	]
};