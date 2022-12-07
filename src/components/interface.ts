export type PlanPropTypes = {
  title: string;
  imageUrl: string;
  price?: string;
  monthly?: string;
  yearly?: string;
};

export type SummaryPropTypes = {
  subTitle: string;
  monthly: string;
  yearly: string;
  addOns: IAddOnItem[];
};

export interface IUserProfile {
  email?: string;
  name?: string;
  phone?: string;
}
export interface IAddOn {
  online?: boolean;
  storage?: boolean;
  customProfile?: boolean;
}

export type ControlStepsPropTypes = {
  step: number;
  updateStep(step: number): void;
};
export interface IAddOnItem {
  title: string;
  monthly: string;
  yearly: string;
}

export interface IStore {
  name: string;
  email: string;
  phone: string;
  subscription: {
    type: 'monthly' | 'yearly';
    title: string;
    price: string;
    addOns: IAddOnItem[];
  };
}
