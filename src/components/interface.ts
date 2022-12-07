export type PlanPropTypes = {
  title: string;
  imageUrl: string;
};

export type SummaryPropTypes = {
  subTitle: string;
  monthly: number;
  yearly: number;
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
  monthly: number;
  yearly: number;
}

export interface IStore {
  name: string;
  email: string;
  phone: string;
  subscription: {
    type: 'monthly' | 'yearly';
    title: string;
    addOns: IAddOnItem[];
  };
}
