import { cva, type RecipeVariantProps } from "../../styled-system/css";

export const buttonStyle = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "semibold",
    borderRadius: "md",
    cursor: "pointer",
    transition: "colors",
    _disabled: { opacity: 0.5, cursor: "not-allowed" },
    "&[data-disabled]": { opacity: 0.5, cursor: "not-allowed" },
  },
  variants: {
    variant: {
      solid: {
        bg: "blue.500",
        color: "white",
        _hover: { bg: "blue.600" },
        _active: { bg: "blue.700" },
      },
      outline: {
        bg: "transparent",
        color: "blue.500",
        borderWidth: "1px",
        borderColor: "blue.500",
        _hover: { bg: "blue.50" },
        _active: { bg: "blue.100" },
      },
    },
    size: {
      sm: { px: "3", py: "1.5", fontSize: "sm" },
      md: { px: "4", py: "2", fontSize: "md" },
      lg: { px: "6", py: "3", fontSize: "lg" },
    },
  },
  defaultVariants: {
    variant: "solid",
    size: "md",
  },
});

export type ButtonVariants = RecipeVariantProps<typeof buttonStyle>;
