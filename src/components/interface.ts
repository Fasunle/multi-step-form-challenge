import {
  FieldErrorsImpl,
  RegisterOptions,
  UseFormRegister,
} from 'react-hook-form';

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

export interface IUserProfile {
  email: string;
  name: string;
  phone: string;
}

export type PersonalType = {
  register: UseFormRegister<RegisterOptions & IUserProfile>;
  errors: Partial<FieldErrorsImpl<IUserProfile>>;
};
