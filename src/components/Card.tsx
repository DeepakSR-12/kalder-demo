// import { Box, useStyleConfig} from '@chakra-ui/react';

import { useStyleConfig, chakra, forwardRef } from "@chakra-ui/react";
const CustomCard = forwardRef<any, "div">((props, ref) => {
  const { size, variant, ...rest } = props;
  const styles = useStyleConfig("Card", { size, variant });

  return <chakra.div ref={ref} __css={styles} {...rest} />;
});

export default CustomCard;
