import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Button = styled.div`
  z-index: 10;
  cursor: pointer;
  margin-right: 15px;
`;

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeLinecap="round"
    strokeWidth="3"
    {...props}
  />
);

const transition = { duration: 0.33 };

const MenuToggle = ({toggle,isOpen}) => {
    return (
        <Button onClick={toggle}>
          <svg width="20" height="20" viewBox="0 0 20 20">
            <Path
              animate={isOpen ? "open" : "closed"}
              initial={false}
              variants={{
                closed: { d: "M 2 2.5 L 20 2.5", stroke: "hsl(0, 0%, 18%)" },
                open: { d: "M 3 16.5 L 17 2.5", stroke: "hsl(0, 0%, 18%)" },
              }}
              transition={transition}
            />
            <Path
              d="M 2 9.423 L 20 9.423"
              stroke="hsl(0, 0%, 18%)"
              animate={isOpen ? "open" : "closed"}
              initial={false}
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              transition={transition}
            />
            <Path
              animate={isOpen ? "open" : "closed"}
              initial={false}
              variants={{
                closed: { d: "M 2 16.346 L 20 16.346", stroke: "hsl(0, 0%, 18%)" },
                open: { d: "M 3 2.5 L 17 16.346", stroke: "hsl(0, 0%, 18%)" },
              }}
              transition={transition}
            />
          </svg>
        </Button>
      );
}

export default MenuToggle
