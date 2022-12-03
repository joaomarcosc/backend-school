import School from "../infra/typeorm/entities/School";

interface IRequest {
  name: string
  document: string
  address: string
  zipcode: string
  city: string;
  state: string
  country: string;
}

export class CreateSchoolService {
  async execute(request: IRequest): Promise<any> { }
}