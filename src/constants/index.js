export const DEFAULT_PLACE = {
  name: "Bhubaneswar",
  place_id: "bhubaneshwar",
  adm_area1: "Odisha",
  adm_area2: "Khordha",
  country: "India",
  lat: "20.27241N",
  lon: "85.83385E",
  timezone: "Asia/Kolkata",
  type: "settlement",
};

export const MEASUREMENT_SYSTEMS = {
  AUTO: "auto",
  METRIC: "metric",
  UK: "uk",
  US: "us",
  CA: "ca",
};


export const UNITS = {
  metric:{
    temperature:'℃',
    precipitation:'mm/h',
    wind_speed:'m/s',
    visibility:'km',
    humidity:'%',
    uv_index:'',
    cloud_cover:'%',
  },
  us:{
    temperature:'°F',
    precipitation:'in/h',
    wind_speed:'mph',
    visibility:'mi',
    humidity:'%',
    uv_index:'',
    cloud_cover:'%',
  },
  uk:{
    temperature:'℃',
    precipitation:'mm/h',
    wind_speed:'mph',
    visibility:'miles',
    humidity:'%',
    uv_index:'',
    cloud_cover:'%',
  },
  ca:{
    temperature:'℃',
    precipitation:'mm/h',
    wind_speed:'km/h',
    visibility:'km',
    humidity:'%',
    uv_index:'',
    cloud_cover:'%',
  },

}