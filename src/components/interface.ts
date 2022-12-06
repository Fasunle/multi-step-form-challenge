export type PlanPropTypes = {
  title: string;
  imageUrl: string;
  price: string;
};

export type SummaryPropTypes = {
  subTitle: string;
  price: string;
  addOns: Omit<PlanPropTypes, 'imageUrl'>[];
};
