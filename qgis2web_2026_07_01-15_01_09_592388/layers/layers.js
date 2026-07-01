var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_V86_TRONCONS_1 = new ol.format.GeoJSON();
var features_V86_TRONCONS_1 = format_V86_TRONCONS_1.readFeatures(json_V86_TRONCONS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_V86_TRONCONS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_V86_TRONCONS_1.addFeatures(features_V86_TRONCONS_1);
var lyr_V86_TRONCONS_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_V86_TRONCONS_1, 
                style: style_V86_TRONCONS_1,
                popuplayertitle: 'V86_TRONCONS',
                interactive: true,
    title: 'V86_TRONCONS<br />\
    <img src="styles/legend/V86_TRONCONS_1_0.png" /> Voie verte en projet<br />\
    <img src="styles/legend/V86_TRONCONS_1_1.png" /> Voie verte réalisée<br />\
    <img src="styles/legend/V86_TRONCONS_1_2.png" /> Vallée du Lot à vélo voie partagée<br />' });
var format_schema_panneaux_2 = new ol.format.GeoJSON();
var features_schema_panneaux_2 = format_schema_panneaux_2.readFeatures(json_schema_panneaux_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_schema_panneaux_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_schema_panneaux_2.addFeatures(features_schema_panneaux_2);
var lyr_schema_panneaux_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_schema_panneaux_2, 
                style: style_schema_panneaux_2,
                popuplayertitle: 'schema_panneaux',
                interactive: true,
                title: '<img src="styles/legend/schema_panneaux_2.png" /> schema_panneaux'
            });
var format_v86_Haltes_Aires_valideesGpTravailElargi_mai2026_3 = new ol.format.GeoJSON();
var features_v86_Haltes_Aires_valideesGpTravailElargi_mai2026_3 = format_v86_Haltes_Aires_valideesGpTravailElargi_mai2026_3.readFeatures(json_v86_Haltes_Aires_valideesGpTravailElargi_mai2026_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_v86_Haltes_Aires_valideesGpTravailElargi_mai2026_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_v86_Haltes_Aires_valideesGpTravailElargi_mai2026_3.addFeatures(features_v86_Haltes_Aires_valideesGpTravailElargi_mai2026_3);
var lyr_v86_Haltes_Aires_valideesGpTravailElargi_mai2026_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_v86_Haltes_Aires_valideesGpTravailElargi_mai2026_3, 
                style: style_v86_Haltes_Aires_valideesGpTravailElargi_mai2026_3,
                popuplayertitle: 'v86_Haltes_Aires_validees GpTravailElargi_mai2026',
                interactive: true,
    title: 'v86_Haltes_Aires_validees GpTravailElargi_mai2026<br />\
    <img src="styles/legend/v86_Haltes_Aires_valideesGpTravailElargi_mai2026_3_0.png" /> Aire de services<br />\
    <img src="styles/legend/v86_Haltes_Aires_valideesGpTravailElargi_mai2026_3_1.png" /> Halte repos<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_V86_TRONCONS_1.setVisible(true);lyr_schema_panneaux_2.setVisible(true);lyr_v86_Haltes_Aires_valideesGpTravailElargi_mai2026_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_V86_TRONCONS_1,lyr_schema_panneaux_2,lyr_v86_Haltes_Aires_valideesGpTravailElargi_mai2026_3];
lyr_V86_TRONCONS_1.set('fieldAliases', {'id': 'id', 'Date_Edit': 'Date_Edit', 'TYPEVOIRIE': 'TYPEVOIRIE', 'Existant': 'Existant', 'V86_01': 'V86_01', 'distance': 'distance', 'date_trava': 'date_trava', });
lyr_schema_panneaux_2.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_v86_Haltes_Aires_valideesGpTravailElargi_mai2026_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'type': 'type', 'Dept': 'Dept', 'Comm': 'Comm', });
lyr_V86_TRONCONS_1.set('fieldImages', {'id': 'TextEdit', 'Date_Edit': 'DateTime', 'TYPEVOIRIE': 'TextEdit', 'Existant': 'TextEdit', 'V86_01': 'TextEdit', 'distance': 'TextEdit', 'date_trava': 'TextEdit', });
lyr_schema_panneaux_2.set('fieldImages', {'id': 'TextEdit', 'type': 'TextEdit', });
lyr_v86_Haltes_Aires_valideesGpTravailElargi_mai2026_3.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'type': 'TextEdit', 'Dept': 'TextEdit', 'Comm': 'TextEdit', });
lyr_V86_TRONCONS_1.set('fieldLabels', {'id': 'no label', 'Date_Edit': 'no label', 'TYPEVOIRIE': 'no label', 'Existant': 'no label', 'V86_01': 'no label', 'distance': 'no label', 'date_trava': 'no label', });
lyr_schema_panneaux_2.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_v86_Haltes_Aires_valideesGpTravailElargi_mai2026_3.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'type': 'no label', 'Dept': 'no label', 'Comm': 'no label', });
lyr_v86_Haltes_Aires_valideesGpTravailElargi_mai2026_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});