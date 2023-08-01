import * as yup from "yup";
import { languages } from "../languages/languages";

type YupValidation = yup.StringSchema | yup.BooleanSchema | yup.MixedSchema;

interface Validations {
  required: yup.StringSchema;
  checkbox: yup.BooleanSchema;
  noValidation: yup.MixedSchema;
}

export type CustomSchema<T> = {
  [key in keyof T]: keyof Validations;
};

type SchemaWithValidations = {
  [key: string]: YupValidation;
};

export function useSchema<T>(schemaObject: CustomSchema<T>) {
  const { thisFieldIsRequired } = languages.PL.validations;

  const validations: Validations = {
    required: yup.string().required(thisFieldIsRequired),
    checkbox: yup.bool().oneOf([true], thisFieldIsRequired),
    noValidation: yup.mixed(),
  };

  const getSchemaRules = (
    schemaObject: CustomSchema<T>
  ): SchemaWithValidations => {
    let schemaWithValidations: SchemaWithValidations = {};
    console.log("schema Rules", schemaObject);
    Object.entries(schemaObject).forEach(([key, value]) => {
      const val = value as keyof Validations;
      const newRule = { [key]: validations[val] };
      Object.assign(schemaWithValidations, newRule);
    });
    return schemaWithValidations;
  };

  return yup.object().shape(getSchemaRules(schemaObject));
}
