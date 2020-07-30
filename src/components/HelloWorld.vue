<template>
    <div>
        <div>
            <h2>得分:{{score}}</h2>
        </div>
        <div class="hello">
            <div class="table" @keyup:click.ctrl="keyEvent" :style="{width:17*size+'px'}">
                <div
                    v-for="(item, index) in coordinate"
                    :key="index"
                    class="em"
                    :style="{ float: item.y / size !== 1 ? '' : '' }"
                    :item="item.x+'-'+item.y"
                >
                    <div
                        :class="{
                            food: item.type == 'food',
                            'snake-header': item.type == 'snakeHeader',
                            'snake-body': item.type == 'snakeBody',
                        }"
                    ></div>
                </div>
            </div>
        </div>
        <div>
            <h2>{{ msg }}</h2>
        </div>
    </div>
</template>

<script>
export default {
    name: "HelloWorld",
    data() {
        return {
            score:0,
            size: 20,
            coordinate: [],
            food: {},
            snake: [],
            direction: "down",
            moveTimer: "",
            msg: "", //提示语
            speed: 200, //速度 ms
        };
    },
    watch: {
        food: {
            handler(newval) {
                this.coordinate.map((item) => {
                    if (item.x === newval.x && item.y === newval.y) {
                        item.type = "food";
                    }
                });
            },
            immediate: true,
        },
        snake: {
            handler(newval) {
                console.time("处理时间计算");
                this.coordinate.map((item) => {
                    let include = false;
                    newval.map((a, index) => {
                        if (item.x === a.x && item.y === a.y) {
                            if (index === 0) {
                                item.type = "snakeHeader";
                            } else {
                                item.type = "snakeBody";
                            }
                            include = true;
                        }
                    });
                    if (!include && item.type !== "food") {
                        item.type = "";
                    }
                });
                console.timeEnd("处理时间计算");
            },
            immediate: true,
        },
    },
    mounted() {
        this.createXy(this.size);
        this.randomFood();
        this.initSnakeXy();
        this.keyEvent();
    },
    methods: {
        //创建表格坐标
        createXy(size) {
            for (let i = 1; i <= size; i++) {
                for (let j = 1; j <= size; j++) {
                    let xy = {
                        x: i,
                        y: j,
                        type: "",
                    };
                    this.coordinate.push(xy);
                }
            }
        },
        //随机生成一个食物
        randomFood() {
            this.food = {
                x: this.random(1, this.size),
                y: this.random(1, this.size),
                type: "food",
            };
        },
        //初始化snake的位置
        initSnakeXy() {
            this.snake = [
                { x: 3, y: 3 },
                { x: 3, y: 4 },
                { x: 3, y: 5 },
            ];
        },
        //snake身体移动
        snakeMove() {
            let v_this = this;
            clearInterval(this.moveTimer);
            this.moveTimer = setInterval(() => {
                const head = v_this.snake[0];
                if (v_this.direction === "down") {
                    v_this.updateSnake({ x: head.x + 1, y: head.y });
                }
                if (v_this.direction === "right") {
                    v_this.updateSnake({ x: head.x, y: head.y + 1 });
                }
                if (v_this.direction === "up") {
                    v_this.updateSnake({ x: head.x - 1, y: head.y });
                }
                if (v_this.direction === "left") {
                    v_this.updateSnake({ x: head.x, y: head.y - 1 });
                }
            }, this.speed);
        },
        //修改snake 数组的变化
        updateSnake(head) {
            if (head.x<1||head.x > this.size || head.y<1||head.y > this.size) {
                //游戏结束
                clearInterval(this.moveTimer);
                this.msg = "GameOver！";
                return
            }
            if (head.x === this.food.x && head.y === this.food.y) {
                this.snake.unshift(head);
                this.randomFood();
                this.score++
            } else {
                this.snake.unshift(head);
                this.snake.pop();
            }
        },
        keyEvent(event) {
            let v_this = this;
            document.onkeydown = function (event) {
                var e =
                    event ||
                    window.event ||
                    arguments.callee.caller.arguments[0];
                    v_this.msg = "游戏开始";
                switch (e && e.keyCode) {
                    case 37:
                        console.info("37=左键");
                        v_this.direction = "left";
                        v_this.snakeMove();
                        break;
                    case 38:
                        console.info("38=上键");
                        v_this.direction = "up";
                        v_this.snakeMove();
                        break;
                    case 39:
                        console.info("39=右键");
                        v_this.direction = "right";
                        v_this.snakeMove();
                        break;
                    case 40:
                        console.info("40下键");
                        v_this.direction = "down";
                        v_this.snakeMove();
                        break;
                    case 32:
                        console.info("32空格");
                        clearInterval(v_this.moveTimer);
                        v_this.msg = "游戏已暂停";
                        break;
                    default:
                        break;
                }
            };
        },

        /**
         * 产生随机整数，包含下限值，但不包括上限值
         * @param {Number} lower 下限
         * @param {Number} upper 上限
         * @return {Number} 返回在下限到上限之间的一个随机整数
         */
        random(lower, upper) {
            return Math.floor(Math.random() * (upper - lower)) + lower;
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>
.hello {
    display: flex;
    align-items: center;
    justify-content: center;
}
.table {
    display: flex;
    flex-wrap: wrap;
}
.em {
    border: 1px solid;
    width: 15px;
    height: 15px;
}
.food {
    background-color: red;
    height: 100%;
    width: 100%;
}
.snake-header {
    background-color: #2a4e8a;
    height: 100%;
    width: 100%;
}
.snake-body {
    background-color: #267888;
    height: 100%;
    width: 100%;
}
</style>
