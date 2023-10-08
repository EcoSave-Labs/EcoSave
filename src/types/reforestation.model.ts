export type ReforestationModel = {
  id: string;
  name: string;
  description: string;
  location: string;
  lat: number;
  lng: number;
  image_url: string;
  dimension: number;
  planted_trees: {
    name: string;
    amount: number;
  }[];
};

export type ReforestationTreeModel = {
  id: number;
  name: string;
  type: string;
  grow_space: number;
  germination_time: number;
  time_to_adulthood: number;
  gas_ch4_reduction: number;
  ideal_soil_moisture: number;
  gas_c02_reduction: number;
  recommended_quantity: number;
  planted_quantity: number;
  cluster: number;
};
