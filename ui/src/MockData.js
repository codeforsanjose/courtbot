const MockData = {
	/**
	 * Setting 'useMockData' this on means that the website won't send requests, and
	 * instead use the mock data defined below.
	 */
	useMockData: false,

	/** Mock names*/
	mockNames: [
		"John Thomas",
		"Steph Adam",
		"Orange Apple",
		"Jessica Joe",
		"Bob Jude",
		"Andrea Zach",
		"Ted Match",
		"Penelope Mark",
		"Kaleb Yee",
		"Richard Shake",
		"Tyrus Mall",
	],

	/** A mock array of 'appearance' object literals */
	mockAppearances: [
		{
			uuid: "hfjkshdfksfdhj-yydsfjh-fgjhsdjgdfs",
			datetime: "2023-07-15 12:30 PST",
			parties: ["Bob Smith", "State of California"],
			location: "Santa Clara County Main Courthouse",
			department: "25J",
		},
		{
			uuid: "6a8e9ca0-081d-11ee-be56-0242ac120002",
			datetime: "2023-08-15 2:30 PST",
			parties: ["Bob Smith", "State of California"],
			location: "Santa Clara County Main Courthouse",
			department: "27C",
		},
		{
			uuid: "6a8e9f34-081d-11ee-be56-0242ac120002",
			datetime: "2023-09-15 4:30 PST",
			parties: ["Bob Smith", "State of California"],
			location: "Santa Clara County Main Courthouse",
			department: "29K",
		},
	],
};

export default MockData;
