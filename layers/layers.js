var wms_layers = [];

var lyr_lycee_2022_georeftif_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "lycee_2022_georef.tif",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/lycee_2022_georeftif_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [541793.240792, 5450755.857027, 544052.580204, 5452549.290022]
                            })
                        });
var format_nom_oiseaux_BESNARD_SERGENT_1 = new ol.format.GeoJSON();
var features_nom_oiseaux_BESNARD_SERGENT_1 = format_nom_oiseaux_BESNARD_SERGENT_1.readFeatures(json_nom_oiseaux_BESNARD_SERGENT_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nom_oiseaux_BESNARD_SERGENT_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nom_oiseaux_BESNARD_SERGENT_1.addFeatures(features_nom_oiseaux_BESNARD_SERGENT_1);
var lyr_nom_oiseaux_BESNARD_SERGENT_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_nom_oiseaux_BESNARD_SERGENT_1, 
                style: style_nom_oiseaux_BESNARD_SERGENT_1,
                interactive: true,
                title: '<img src="styles/legend/nom_oiseaux_BESNARD_SERGENT_1.png" /> nom_oiseaux_BESNARD_SERGENT'
            });
var format_Parcours_2 = new ol.format.GeoJSON();
var features_Parcours_2 = format_Parcours_2.readFeatures(json_Parcours_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parcours_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parcours_2.addFeatures(features_Parcours_2);
var lyr_Parcours_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Parcours_2, 
                style: style_Parcours_2,
                interactive: true,
                title: '<img src="styles/legend/Parcours_2.png" /> Parcours'
            });
var format_points_ecoute_3 = new ol.format.GeoJSON();
var features_points_ecoute_3 = format_points_ecoute_3.readFeatures(json_points_ecoute_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_points_ecoute_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_points_ecoute_3.addFeatures(features_points_ecoute_3);
var lyr_points_ecoute_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_points_ecoute_3, 
                style: style_points_ecoute_3,
                interactive: true,
                title: '<img src="styles/legend/points_ecoute_3.png" /> points_ecoute'
            });

lyr_lycee_2022_georeftif_0.setVisible(true);lyr_nom_oiseaux_BESNARD_SERGENT_1.setVisible(true);lyr_Parcours_2.setVisible(true);lyr_points_ecoute_3.setVisible(true);
var layersList = [lyr_lycee_2022_georeftif_0,lyr_nom_oiseaux_BESNARD_SERGENT_1,lyr_Parcours_2,lyr_points_ecoute_3];
lyr_nom_oiseaux_BESNARD_SERGENT_1.set('fieldAliases', {'Nom oiseau': 'Nom oiseau', 'nombre': 'nombre', 'typcontact': 'typcontact', 'certitude': 'certitude', });
lyr_Parcours_2.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'topografix': 'topografix', });
lyr_points_ecoute_3.set('fieldAliases', {'Num_point': 'Num_point', });
lyr_nom_oiseaux_BESNARD_SERGENT_1.set('fieldImages', {'Nom oiseau': '', 'nombre': '', 'typcontact': '', 'certitude': '', });
lyr_Parcours_2.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'TextEdit', 'type': 'TextEdit', 'topografix': 'TextEdit', });
lyr_points_ecoute_3.set('fieldImages', {'Num_point': '', });
lyr_nom_oiseaux_BESNARD_SERGENT_1.set('fieldLabels', {'Nom oiseau': 'no label', 'nombre': 'no label', 'typcontact': 'no label', 'certitude': 'no label', });
lyr_Parcours_2.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'topografix': 'no label', });
lyr_points_ecoute_3.set('fieldLabels', {'Num_point': 'no label', });
lyr_points_ecoute_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});