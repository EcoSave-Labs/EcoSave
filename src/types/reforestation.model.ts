export type ReforestationModel = {
  id: number;
  name: string;
  description: string;
  locale: string;
  trees: ReforestationTreeModel;
};

export type ReforestationTreeModel = {
  name: string
  type: string
  recommended_quantity: number
  grow_space: number
  germination_time: number
  time_to_adulthood: number
  gas_ch4_reduction: number
  ideal_soil_moisture: number
  gas_c02_reduction: number
};
