export class Register {
  buyAt: Date;
  local: string;
  product: string;
  value: number;
  buyAtMonth: string;
  paymentMonth: string;
}

export class RegisterContainer{
    registerList:Register[] = [];
}
