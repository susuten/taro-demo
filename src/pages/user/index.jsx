import Taro from "@tarojs/taro";
import { View, Button } from "@tarojs/components";

function User() {
  function goPage() {
    Taro.navigateTo({
      url: "/pages/index/index",
    });
  }
  return (
    <View>
      <Button onClick={goPage}>跳转Index页面</Button>
    </View>
  );
}

export default User;
