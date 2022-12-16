import { Box, ScrollView, View } from "native-base";
import React, { useState } from "react";

type Props = {};

const List = (props: Props) => {
  const [list, setList] = useState([
    { name: "Coca", id: 1 },
    { name: "Fanta", id: 2 },
    { name: "Beer", id: 3 },
    { name: "Spire", id: 4 },
    {
      name: "Black Panter",
      id: 5,
    },
  ]);
  return (
    <div>
      {" "}
      <ScrollView>
        {list.map((item: any) => {
          return (
            <View key={item.name}>
              <Box
                bg={"pink.400"}
                marginTop={"2"}
                fontWeight={"bold"}
                fontSize={"10rem"}
                color={"white"}
              >
                {item.name}
              </Box>
            </View>
          );
        })}
      </ScrollView>
    </div>
  );
};

export default List;
