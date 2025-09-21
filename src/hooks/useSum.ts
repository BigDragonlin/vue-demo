import axios from 'axios';
import { ref } from 'vue';

export default function () {
    let sum = ref(0);
    function addSum() {
        sum.value++;
    }
    return {
        sum,
        addSum
    }
}