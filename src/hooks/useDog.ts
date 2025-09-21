import axios from 'axios';
import { ref, onMounted } from 'vue';

export default function () {
    let dogList = ref([
        'https:\/\/images.dog.ceo\/breeds\/pembroke\/n02113023_3913.jpg',
    ]);

    // 在组件挂载时获取狗狗
    onMounted(() => {
        getDog();
    })

    async function getDog() {
        try {
            let res = await axios.get('https://dog.ceo/api/breed/pembroke/images/random');
            // console.log(res.data.message);
            dogList.value.push(res.data.message);
        } catch (error) {
            alert('获取狗狗失败' + error);
        }
    }

    return {
        dogList,
        getDog
    }
}
