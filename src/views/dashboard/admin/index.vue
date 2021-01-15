/**
 *首页
 */
<template>
  <div class="dashboard-admin-container">
    <!-- 小组信息 -->
    <div class="team-container">
      <el-scrollbar ref="elscrollbar" class="swapper">
        <ul>
          <li v-for="item in teamList" :key="item.teamId" class="team-card" :style="{backgroundColor:item.bgc}">
            <span class="team-name">{{ item.teamName }}</span>
            <div class="avatar-box">
              <span v-for="(member,index) in item.members.slice(0,6)" :key="member.id" class="svg-container">
                <svg-icon v-if="index<5" :icon-class="member.avatar" />
                <svg-icon v-else-if="index==5" icon-class="more" style="transform:rotate(90deg)" />
              </span>
            </div>
          </li>
        </ul>
      </el-scrollbar>
      <div class="control-box">
        <div class="button">
          <!-- 后退 -->
          <span class="svg-container cursor" @click="()=>{moveSwapper(-300)}">
            <svg-icon icon-class="qianjin" :style="{transform:'rotate(180deg)'}" />
          </span>
          <!-- 前进 -->
          <span class="svg-container cursor" @click="()=>{moveSwapper(300)}">
            <svg-icon icon-class="qianjin" />
          </span>
        </div>
        <div class="new-team cursor" @click="createTeam">新建小组</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardAdmin',
  data() {
    return {
      teamList: [
        {
          teamName: '男子篮球组',
          teamId: '01',
          bgc: '#729CE3',
          members: [
            {
              avatar: 'avatar1',
              id: '01'
            }, {
              avatar: 'avatar2',
              id: '02'
            }, {
              avatar: 'avatar3',
              id: '03'
            }, {
              avatar: 'avatar4',
              id: '04'
            }, {
              avatar: 'avatar5',
              id: '05'
            }
          ]
        }, {
          teamName: '男子篮球组',
          teamId: '02',
          bgc: '#F59C62',
          members: [
            {
              avatar: 'avatar1',
              id: '01'
            }, {
              avatar: 'avatar2',
              id: '02'
            }, {
              avatar: 'avatar3',
              id: '03'
            }, {
              avatar: 'avatar4',
              id: '04'
            }, {
              avatar: 'avatar5',
              id: '05'
            }, {
              avatar: 'avatar2',
              id: '06'
            },
            {
              avatar: 'avatar3',
              id: '07'
            }
          ]
        }, {
          teamName: '男子篮球组',
          teamId: '03',
          bgc: '#2FD3B9',
          members: [
            {
              avatar: 'avatar1',
              id: '01'
            }, {
              avatar: 'avatar2',
              id: '02'
            }, {
              avatar: 'avatar3',
              id: '03'
            }, {
              avatar: 'avatar4',
              id: '04'
            }, {
              avatar: 'avatar5',
              id: '05'
            }
          ]
        }, {
          teamName: '男子篮球组',
          teamId: '04',
          bgc: '#37A8D6',
          members: [
            {
              avatar: 'avatar1',
              id: '01'
            }, {
              avatar: 'avatar2',
              id: '02'
            }, {
              avatar: 'avatar3',
              id: '03'
            }, {
              avatar: 'avatar4',
              id: '04'
            }, {
              avatar: 'avatar5',
              id: '05'
            }
          ]
        }, {
          teamName: '男子篮球组',
          teamId: '05',
          bgc: '#729CE3',
          members: [
            {
              avatar: 'avatar1',
              id: '01'
            }, {
              avatar: 'avatar2',
              id: '02'
            }, {
              avatar: 'avatar3',
              id: '03'
            }, {
              avatar: 'avatar4',
              id: '04'
            }, {
              avatar: 'avatar5',
              id: '05'
            }
          ]
        }, {
          teamName: '男子篮球组',
          teamId: '06',
          bgc: '#37A8D6',
          members: [
            {
              avatar: 'avatar1',
              id: '01'
            }, {
              avatar: 'avatar2',
              id: '02'
            }, {
              avatar: 'avatar3',
              id: '03'
            }, {
              avatar: 'avatar4',
              id: '04'
            }, {
              avatar: 'avatar5',
              id: '05'
            }, {
              avatar: 'avatar2',
              id: '06'
            },
            {
              avatar: 'avatar3',
              id: '07'
            }
          ]
        }, {
          teamName: '男子篮球组',
          teamId: '07',
          bgc: '#729CE3',
          members: [
            {
              avatar: 'avatar1',
              id: '01'
            }, {
              avatar: 'avatar2',
              id: '02'
            }, {
              avatar: 'avatar3',
              id: '03'
            }, {
              avatar: 'avatar4',
              id: '04'
            }, {
              avatar: 'avatar5',
              id: '05'
            }
          ]
        }
      ]
    }
  },
  methods: {
    /* 滚动进度条 */
    scrollEvent(value) {
      //  滚动条
      var wrap = this.$refs['elscrollbar'].$refs['wrap']
      //  滚动距离
      var moveWidth = wrap.scrollLeft
      this.$refs['elscrollbar'].$refs['wrap'].scrollLeft = moveWidth + value
    },
    /* 点击前进 后退事件 */
    moveSwapper(value) {
      this.scrollEvent(value)
    },
    /* 新建小组 */
    createTeam() {
      console.log('新建小组')
    }
  }
}
</script>
<style lang="scss" >
.cursor{
  cursor: pointer;
}
  .dashboard-admin-container{
    padding: 20px;
    background-color: #F2F6FA;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }
  //小组
  .team-container{
    display: flex;
    width: 100%;
    height: 140px;
    align-items: center;
    .swapper{
      width:calc(100% - 80px);
      height:100%;
      .el-scrollbar__view{
        height: 100%;
        display: flex;
        align-items: center;
      }
      //小组卡片
      .team-card{
        display: inline-block;
        flex-shrink: 0;
        width: 340px;
        height: 120px;
        margin-right: 20px;
        border-radius: 10px;
        padding: 20px;
        //队名
        .team-name{
          color: #fff;
          font-size: 20px;
        }
        //头像框
        .avatar-box{
          display: flex;
          margin-top: 20px;
          .svg-container {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 10px;
            width: 42px;
            height: 42px;
            background-color: #fff;
            border-radius: 20px;
            overflow: hidden;
          }
          .svg-icon{
            width: 40px;
            height: 40px;
          }
        }
      }
      .team-card:last-child{
        margin-right: 0;
      }
      .team-card:hover{
        -webkit-box-shadow: #666 0px 0px 10px;
        -moz-box-shadow: #666 0px 0px 10px;
      }
    }

    .control-box{
      display: flex;
      position: fixed;
      right: 20px;
      width: 80px;
      height: 120px;
      background-color: #fff;
      padding-top: 30px;
      align-items: center;
      flex-direction: column;
      // 取消双击选中文字
      -moz-user-select:none;/*火狐*/
      -webkit-user-select:none;/*webkit浏览器*/
      -ms-user-select:none;/*IE10*/
      -khtml-user-select:none;/*早期浏览器*/
      user-select:none;
      .svg-icon{
        width: 30px;
        height: 30px;
        color: #C7C7C7;
      }
      .svg-icon:active{
        color: #7AA7EB;
      }
      .new-team{
        color:#7AA7EB;
        margin-top: 10px;
      }
    }
  }

  .el-scrollbar .el-scrollbar__wrap .el-scrollbar__view{
    white-space: nowrap;
  }
  .el-scrollbar__wrap::-webkit-scrollbar {
    display: none;
  }
  // .el-scrollbar__thumb{
  //   display: none;
  // }
</style>
