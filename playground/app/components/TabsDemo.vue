<script setup lang="ts">
import { ref } from 'vue';

const activeTab = ref('account');
const activeCodeTab = ref('vue');
const activeFormTab = ref('login');
</script>

<template>
  <div class="flex flex-wrap gap-16">
    <!-- Basic Tabs -->
    <div class="w-full max-w-xl space-y-4">
      <ZTabs v-model="activeTab" class="w-full">
        <ZTabsList class="w-full">
          <ZTabsTrigger value="account">Account</ZTabsTrigger>
          <ZTabsTrigger value="password">Password</ZTabsTrigger>
          <ZTabsTrigger value="settings">Settings</ZTabsTrigger>
        </ZTabsList>
        <ZTabsContent value="account" class="p-4 border rounded-lg mt-2">
          <div class="space-y-4">
            <h3 class="text-lg font-medium">Account</h3>
            <p class="text-sm text-muted-foreground">
              Manage your account settings and set e-mail preferences.
            </p>
            <div class="grid gap-2">
              <ZLabel for="name">Name</ZLabel>
              <ZInput id="name" value="Nguyen Van A" />
            </div>
            <div class="grid gap-2">
              <ZLabel for="email">Email</ZLabel>
              <ZInput id="email" type="email" value="example@example.com" />
            </div>
          </div>
        </ZTabsContent>
        <ZTabsContent value="password" class="p-4 border rounded-lg mt-2">
          <div class="space-y-4">
            <h3 class="text-lg font-medium">Password</h3>
            <p class="text-sm text-muted-foreground">
              Change your password here. After saving, you'll be logged out.
            </p>
            <div class="grid gap-2">
              <ZLabel for="current">Current password</ZLabel>
              <ZInput id="current" type="password" />
            </div>
            <div class="grid gap-2">
              <ZLabel for="new">New password</ZLabel>
              <ZInput id="new" type="password" />
            </div>
          </div>
        </ZTabsContent>
        <ZTabsContent value="settings" class="p-4 border rounded-lg mt-2">
          <div class="space-y-4">
            <h3 class="text-lg font-medium">Settings</h3>
            <p class="text-sm text-muted-foreground">
              Manage your notification preferences.
            </p>
            <div class="flex items-center space-x-2">
              <ZCheckbox id="marketing" />
              <ZLabel for="marketing">Receive marketing emails</ZLabel>
            </div>
            <div class="flex items-center space-x-2">
              <ZCheckbox id="social" checked />
              <ZLabel for="social">Receive social media notifications</ZLabel>
            </div>
          </div>
        </ZTabsContent>
      </ZTabs>
    </div>

    <!-- Code Browser Tabs -->
    <div class="w-full max-w-3xl space-y-4">
      <ZTabs v-model="activeCodeTab" class="w-full">
        <ZTabsList>
          <ZTabsTrigger value="vue">
            <div class="flex items-center space-x-2">
              <ZIcon name="i-logos-vue" class="size-4" />
              <span>Vue</span>
            </div>
          </ZTabsTrigger>
          <ZTabsTrigger value="react">
            <div class="flex items-center space-x-2">
              <ZIcon name="i-logos-react" class="size-4" />
              <span>React</span>
            </div>
          </ZTabsTrigger>
          <ZTabsTrigger value="angular">
            <div class="flex items-center space-x-2">
              <ZIcon name="i-logos-angular-icon" class="size-4" />
              <span>Angular</span>
            </div>
          </ZTabsTrigger>
        </ZTabsList>
        <ZTabsContent value="vue" class="border rounded-lg p-4 mt-2">
          <div
            class="text-sm font-mono p-4 bg-muted rounded-md shadow-sm overflow-auto"
          >
            <div class="flex gap-2">
              <span class="text-purple-500">import</span>
              <span class="text-amber-600">{ ref }</span>
              <span class="text-purple-500">from</span>
              <span class="text-green-500">'vue'</span
              ><span class="text-slate-400">;</span>
            </div>
            <div class="h-4"></div>
            <div class="flex gap-2">
              <span class="text-purple-500">const</span>
              <span class="text-blue-500">count</span>
              <span class="text-slate-400">=</span>
              <span class="text-amber-600">ref</span
              ><span class="text-slate-400">(</span
              ><span class="text-orange-500">0</span
              ><span class="text-slate-400">);</span>
            </div>
            <div class="h-4"></div>
            <div class="flex gap-2">
              <span class="text-purple-500">function</span>
              <span class="text-blue-600">increment</span
              ><span class="text-slate-400">() {</span>
            </div>
            <div class="ml-4 flex gap-2">
              <span class="text-blue-500">count</span
              ><span class="text-slate-400">.</span
              ><span class="text-amber-600">value</span
              ><span class="text-slate-400">++;</span>
            </div>
            <div><span class="text-slate-400">}</span></div>
          </div>
        </ZTabsContent>
        <ZTabsContent value="react" class="border rounded-lg p-4 mt-2">
          <div
            class="text-sm font-mono p-4 bg-muted rounded-md shadow-sm overflow-auto"
          >
            <div class="flex gap-2">
              <span class="text-purple-500">import</span>
              <span class="text-amber-600">{ useState }</span>
              <span class="text-purple-500">from</span>
              <span class="text-green-500">'react'</span
              ><span class="text-slate-400">;</span>
            </div>
            <div class="h-4"></div>
            <div class="flex gap-2">
              <span class="text-purple-500">function</span>
              <span class="text-blue-600">Counter</span
              ><span class="text-slate-400">() {</span>
            </div>
            <div class="ml-4 flex gap-2">
              <span class="text-purple-500">const</span>
              <span class="text-slate-400">[</span
              ><span class="text-blue-500">count</span
              ><span class="text-slate-400">,</span>
              <span class="text-blue-500">setCount</span
              ><span class="text-slate-400">]</span>
              <span class="text-slate-400">=</span>
              <span class="text-amber-600">useState</span
              ><span class="text-slate-400">(</span
              ><span class="text-orange-500">0</span
              ><span class="text-slate-400">);</span>
            </div>
            <div class="h-4"></div>
            <div class="ml-4 flex gap-2">
              <span class="text-purple-500">return</span>
              <span class="text-slate-400">(</span>
            </div>
            <div class="ml-8">
              <span class="text-slate-400">&lt;</span
              ><span class="text-cyan-500">button</span>
              <span class="text-purple-400">onClick</span
              ><span class="text-slate-400">={() =&gt;</span>
              <span class="text-blue-500">setCount</span
              ><span class="text-slate-400">(</span
              ><span class="text-blue-500">count</span>
              <span class="text-slate-400">+</span>
              <span class="text-orange-500">1</span
              ><span class="text-slate-400">)}&gt;</span>
            </div>
            <div class="ml-12">
              <span class="text-slate-300">Count: </span
              ><span class="text-slate-400">{</span
              ><span class="text-blue-500">count</span
              ><span class="text-slate-400">}</span>
            </div>
            <div class="ml-8">
              <span class="text-slate-400">&lt;/</span
              ><span class="text-cyan-500">button</span
              ><span class="text-slate-400">&gt;</span>
            </div>
            <div class="ml-4">
              <span class="text-slate-400">);</span>
            </div>
            <div>
              <span class="text-slate-400">}</span>
            </div>
          </div>
        </ZTabsContent>
        <ZTabsContent value="angular" class="border rounded-lg p-4 mt-2">
          <div
            class="text-sm font-mono p-4 bg-muted rounded-md shadow-sm overflow-auto"
          >
            <div class="flex gap-2">
              <span class="text-purple-500">import</span>
              <span class="text-amber-600">{ Component }</span>
              <span class="text-purple-500">from</span>
              <span class="text-green-500">'@angular/core'</span
              ><span class="text-slate-400">;</span>
            </div>
            <div class="h-4"></div>
            <div>
              <span class="text-pink-500">@Component</span
              ><span class="text-slate-400">({</span>
            </div>
            <div class="ml-4">
              <span class="text-blue-500">selector</span
              ><span class="text-slate-400">:</span>
              <span class="text-green-500">'app-counter'</span
              ><span class="text-slate-400">,</span>
            </div>
            <div class="ml-4">
              <span class="text-blue-500">template</span
              ><span class="text-slate-400">:</span>
              <span class="text-green-500">`</span>
            </div>
            <div class="ml-6">
              <span class="text-slate-400">&lt;</span
              ><span class="text-cyan-500">button</span>
              <span class="text-purple-400">(click)</span
              ><span class="text-slate-400">=</span
              ><span class="text-green-500">"increment()"</span
              ><span class="text-slate-400">&gt;</span>
            </div>
            <div class="ml-8">
              <span class="text-slate-300"
                >Count: &#123;&#123; count &#125;&#125;</span
              >
            </div>
            <div class="ml-6">
              <span class="text-slate-400">&lt;/</span
              ><span class="text-cyan-500">button</span
              ><span class="text-slate-400">&gt;</span>
            </div>
            <div class="ml-4">
              <span class="text-green-500">`</span>
            </div>
            <div>
              <span class="text-slate-400">})</span>
            </div>
            <div class="h-2"></div>
            <div class="flex gap-2">
              <span class="text-purple-500">export</span>
              <span class="text-purple-500">class</span>
              <span class="text-blue-600">CounterComponent</span>
              <span class="text-slate-400">{</span>
            </div>
            <div class="ml-4">
              <span class="text-blue-500">count</span>
              <span class="text-slate-400">=</span>
              <span class="text-orange-500">0</span
              ><span class="text-slate-400">;</span>
            </div>
            <div class="h-4"></div>
            <div class="ml-4">
              <span class="text-blue-600">increment</span
              ><span class="text-slate-400">() {</span>
            </div>
            <div class="ml-8">
              <span class="text-cyan-600">this</span
              ><span class="text-slate-400">.</span
              ><span class="text-blue-500">count</span
              ><span class="text-slate-400">++;</span>
            </div>
            <div class="ml-4">
              <span class="text-slate-400">}</span>
            </div>
            <div>
              <span class="text-slate-400">}</span>
            </div>
          </div>
        </ZTabsContent>
      </ZTabs>
    </div>

    <!-- Customized Tabs -->
    <div class="w-full max-w-md">
      <ZCard>
        <ZCardHeader>
          <ZCardTitle>Authentication</ZCardTitle>
          <ZCardDescription>Manage your account</ZCardDescription>
        </ZCardHeader>
        <ZCardContent>
          <ZTabs v-model="activeFormTab" class="w-full">
            <ZTabsList class="grid grid-cols-2 mb-4 w-full">
              <ZTabsTrigger value="login">Login</ZTabsTrigger>
              <ZTabsTrigger value="register">Register</ZTabsTrigger>
            </ZTabsList>
            <ZTabsContent value="login">
              <div class="space-y-4">
                <div class="space-y-2">
                  <ZLabel for="email">Email</ZLabel>
                  <ZInput id="email" placeholder="m@example.com" type="email" />
                </div>
                <div class="space-y-2">
                  <div class="flex items-center justify-between">
                    <ZLabel for="password">Password</ZLabel>
                    <ZButton variant="link" size="sm" class="text-xs">
                      Forgot password?
                    </ZButton>
                  </div>
                  <ZInput id="password" type="password" />
                </div>
                <ZButton class="w-full">Login</ZButton>
              </div>
            </ZTabsContent>
            <ZTabsContent value="register">
              <div class="space-y-4">
                <div class="space-y-2">
                  <ZLabel for="name">Name</ZLabel>
                  <ZInput id="name" placeholder="John Doe" />
                </div>
                <div class="space-y-2">
                  <ZLabel for="email">Email</ZLabel>
                  <ZInput id="email" placeholder="m@example.com" type="email" />
                </div>
                <div class="space-y-2">
                  <ZLabel for="password">Password</ZLabel>
                  <ZInput id="password" type="password" />
                </div>
                <div class="flex items-center space-x-2">
                  <ZCheckbox id="terms" />
                  <ZLabel for="terms" class="text-xs">
                    I agree to the
                    <ZButton variant="link" class="h-auto p-0 text-xs">
                      Terms of Service
                    </ZButton>
                    and
                    <ZButton variant="link" class="h-auto p-0 text-xs">
                      Privacy Policy
                    </ZButton>
                  </ZLabel>
                </div>
                <ZButton class="w-full">Register</ZButton>
              </div>
            </ZTabsContent>
          </ZTabs>
        </ZCardContent>
      </ZCard>
    </div>
  </div>
</template>
