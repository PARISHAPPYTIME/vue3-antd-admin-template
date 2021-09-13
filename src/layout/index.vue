<script lang="ts">
import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    BarChartOutlined,
    CloudOutlined,
    AppstoreOutlined,
    TeamOutlined,
    ShopOutlined,
    PlusCircleOutlined,
    QuestionCircleOutlined,
    GithubOutlined,
    CloudDownloadOutlined,
    PoweroffOutlined,
    SafetyCertificateOutlined,
    SyncOutlined,
} from '@ant-design/icons-vue'
import IconNext from '@/components/icon-next/index.vue'
import { defineComponent, ref } from 'vue'
import './index.less'
export default defineComponent({
    components: {
        UserOutlined,
        VideoCameraOutlined,
        UploadOutlined,
        BarChartOutlined,
        CloudOutlined,
        AppstoreOutlined,
        TeamOutlined,
        ShopOutlined,
        PlusCircleOutlined,
        QuestionCircleOutlined,
        GithubOutlined,
        CloudDownloadOutlined,
        PoweroffOutlined,
        SafetyCertificateOutlined,
        SyncOutlined,
        IconNext,
    },
    setup() {
        return {
            selectedKeys: ref(['4']),
        }
    },
})
</script>

<template>
    <a-layout>
        <a-layout-sider
            :width="256"
            :style="{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0,
            }"
        >
            <div class="logo"></div>
            <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">
                <a-menu-item key="1">
                    <user-outlined />
                    <span class="nav-text">nav 1</span>
                </a-menu-item>
                <a-menu-item key="2">
                    <video-camera-outlined />
                    <span class="nav-text">nav 2</span>
                </a-menu-item>
                <a-menu-item key="3">
                    <upload-outlined />
                    <span class="nav-text">nav 3</span>
                </a-menu-item>
                <a-menu-item key="4">
                    <bar-chart-outlined />
                    <span class="nav-text">nav 4</span>
                </a-menu-item>
                <a-menu-item key="5">
                    <cloud-outlined />
                    <span class="nav-text">nav 5</span>
                </a-menu-item>
                <a-menu-item key="6">
                    <appstore-outlined />
                    <span class="nav-text">nav 6</span>
                </a-menu-item>
                <a-menu-item key="7">
                    <team-outlined />
                    <span class="nav-text">nav 7</span>
                </a-menu-item>
                <a-menu-item key="8">
                    <shop-outlined />
                    <span class="nav-text">nav 8</span>
                </a-menu-item>
            </a-menu>
        </a-layout-sider>
        <a-layout :style="{ marginLeft: '256px' }">
            <a-layout-header class="app-layout-header">
                <IconNext><PlusCircleOutlined /></IconNext>
                <IconNext><QuestionCircleOutlined /></IconNext>
                <IconNext><GithubOutlined /></IconNext>
                <IconNext><CloudDownloadOutlined /></IconNext>
                <IconNext><PoweroffOutlined /></IconNext>
                <IconNext><SafetyCertificateOutlined /></IconNext>
                <IconNext><SyncOutlined /></IconNext>
                <a-avatar style="background-color: #f56a00; margin-left: 14px">K</a-avatar>
            </a-layout-header>
            <a-layout-content :style="{ margin: '24px 18px 24px', overflow: 'initial' }">
                <div :style="{ background: '#fff' }">
                    <a-page-header
                        class="demo-page-header"
                        title="Title"
                        sub-title="This is a subtitle"
                        @back="() => $router.go(-1)"
                    >
                        <template #extra>
                            <a-button key="3">Operation</a-button>
                            <a-button key="2">Operation</a-button>
                            <a-button key="1" type="primary">Primary</a-button>
                        </template>
                        <a-descriptions size="small" :column="3">
                            <a-descriptions-item label="Created">Lili Qu</a-descriptions-item>
                            <a-descriptions-item label="Association">
                                <a>421421</a>
                            </a-descriptions-item>
                            <a-descriptions-item label="Creation Time"
                                >2017-01-10</a-descriptions-item
                            >
                            <a-descriptions-item label="Effective Time"
                                >2017-10-10</a-descriptions-item
                            >
                            <a-descriptions-item label="Remarks">
                                Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
                            </a-descriptions-item>
                        </a-descriptions>
                    </a-page-header>
                    <div class="app-layout-content">
                        <router-view />
                    </div>
                </div>
            </a-layout-content>
            <a-layout-footer class="app-layout-footer">
                Ant Design ©2018 Created by Ant UED
            </a-layout-footer>
        </a-layout>
    </a-layout>
</template>

<style>
#components-layout-demo-fixed-sider .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
}
.site-layout .site-layout-background {
    background: #fff;
}

[data-theme='dark'] .site-layout .site-layout-background {
    background: #141414;
}
</style>
