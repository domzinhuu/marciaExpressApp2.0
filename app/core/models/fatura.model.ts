export class FaturaItem {
  id: string;
  productName: string;
  local: string;
  installmentActual: string;
  value: number;
  valueString: string;

  constructor(register: any, month: string, year: number) {
    const installment = register.installments.find(item => item.paymentMonth === month && item.paymentYear == year);

    if(installment){
        this.id = installment.id;
        this.productName = register.productName;
        this.local = register.local;
        this.installmentActual = `(${installment.number}/${register.installmentNumber})`;
        this.value = (installment.value / 100);
        this.valueString = (installment.value).toFixed(2).replace('.',',');
    }
  }
}
