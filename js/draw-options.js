function getDrawControlOpts(featureGroup) {
	return {
		edit: {
			featureGroup: featureGroup
		},
		draw: {
			circle: false,
			circlemarker: false,
			rectangle: false,
			polygon: polygonOpts(),
			polyline:polylineOpts()
		}
	}
}

function polylineOpts() {
	return {
		allowIntersection: true,
		shapeOptions: {
			color: "#ffe55c",
			weight: 3,
			dashArray: "5 5",

		}
	};
}

function polygonOpts() {
	return {
		allowIntersection: false,
		showArea: true,
		shapeOptions: {
			color: "#ff0000",
			fillColor: "#ffc900",
			dashArray: "15 15",
			weight: 3
		}
	};
}
