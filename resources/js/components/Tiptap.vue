<template>
  <div class="editor">
    <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
      <div class="bg-gray-700 rounded text-white flex items-center">
        <div>
          <button
              class="p-2 rounded"
              :class="{ 'bg-gray-900': isActive.bold() }"
              @click="commands.bold"
          >
            <span class="font-bold">B</span>
          </button>

          <button
              class="p-2 rounded"
              :class="{ 'bg-gray-900': isActive.italic() }"
              @click="commands.italic"
          >
            <span class="italic">I</span>
          </button>

          <button
              class="p-2 rounded"
              :class="{ 'bg-gray-900': isActive.strike() }"
              @click="commands.strike"
          >
            <span class="line-through">S</span>
          </button>

          <button
              class="p-2 rounded"
              :class="{ 'bg-gray-900': isActive.underline() }"
              @click="commands.underline"
          >
            <span class="underline">S</span>
          </button>
        </div>

        <div class="ml-4">
          <button
              class="p-2 rounded"
              :class="{ 'bg-gray-900': isActive.code() }"
              @click="commands.code"
          >
            <svg class="fill-current w-3 h-3" viewBox="0 0 24 24">
              <path d="M9.147 21.552a1.244 1.244 0 01-.895-.378L.84 13.561a2.257 2.257 0 010-3.125l7.412-7.613a1.25 1.25 0 011.791 1.744l-6.9 7.083a.5.5 0 000 .7l6.9 7.082a1.25 1.25 0 01-.9 2.122zm5.707 0a1.25 1.25 0 01-.9-2.122l6.9-7.083a.5.5 0 000-.7l-6.9-7.082a1.25 1.25 0 011.791-1.744l7.411 7.612a2.257 2.257 0 010 3.125l-7.412 7.614a1.244 1.244 0 01-.89.38zm6.514-9.373z"></path>
            </svg>
          </button>
          <button
              class="p-2 rounded"
              :class="{ 'bg-gray-900': isActive.image() }"
              @click="showImagePrompt(commands.image)"
          >
            <svg viewBox="0 0 24 24" class="fill-current w-3 h-3">
              <circle cx="9.75" cy="6.247" r="2.25"></circle>
              <path d="M16.916 8.71A1.027 1.027 0 0016 8.158a1.007 1.007 0 00-.892.586l-1.558 3.434a.249.249 0 01-.422.053l-.82-1.024a1 1 0 00-.813-.376 1.007 1.007 0 00-.787.426L7.59 15.71a.5.5 0 00.41.79h12a.5.5 0 00.425-.237.5.5 0 00.022-.486z"></path>
              <path d="M22 0H5.5a2 2 0 00-2 2v16.5a2 2 0 002 2H22a2 2 0 002-2V2a2 2 0 00-2-2zm-.145 18.354a.5.5 0 01-.354.146H6a.5.5 0 01-.5-.5V2.5A.5.5 0 016 2h15.5a.5.5 0 01.5.5V18a.5.5 0 01-.145.351z"></path>
              <path d="M19.5 22h-17a.5.5 0 01-.5-.5v-17a1 1 0 00-2 0V22a2 2 0 002 2h17.5a1 1 0 000-2z"></path>
            </svg>
          </button>
          <button
              class="p-2 rounded"
              :class="{ 'bg-gray-900': isActive.paragraph() }"
              @click="commands.paragraph"
          >
            <svg class="fill-current w-3 h-3" viewBox="0 0 24 24">
              <path d="M22.5.248H7.228a6.977 6.977 0 100 13.954h2.318a.25.25 0 01.25.25V22.5a1.25 1.25 0 002.5 0V3a.25.25 0 01.25-.25h3.682a.25.25 0 01.25.25v19.5a1.25 1.25 0 002.5 0V3a.249.249 0 01.25-.25H22.5a1.25 1.25 0 000-2.5zM9.8 11.452a.25.25 0 01-.25.25H7.228a4.477 4.477 0 110-8.954h2.318A.25.25 0 019.8 3z"></path>
            </svg>
          </button>
        </div>

        <div class="ml-4">
<!--          <button-->
<!--              class="w-4 h-3 p-2 rounded"-->
<!--              :class="{ 'bg-gray-900': isActive.heading({ level: 1 }) }"-->
<!--              @click="commands.heading({ level: 1 })"-->
<!--          >-->
<!--            H1-->
<!--          </button>-->

          <button
              class="p-1 rounded"
              :class="{ 'bg-gray-900': isActive.heading({ level: 2 }) }"
              @click="commands.heading({ level: 2 })"
          >
            <span class="w-2 h-3">H2</span>
          </button>

          <button
              class="p-1 rounded"
              :class="{ 'bg-gray-900': isActive.heading({ level: 3 }) }"
              @click="commands.heading({ level: 3 })"
          >
            <span class="w-2 h-3">H3</span>
          </button>
        </div>

        <div class="ml-4">
          <button
              class="p-2 rounded"
              :class="{ 'bg-gray-900': isActive.bullet_list() }"
              @click="commands.bullet_list"
          >
            <svg viewBox="0 0 24 24" class="fill-current w-3 h-3">
              <circle cx="2.5" cy="3.998" r="2.5"></circle>
              <path d="M8.5 5H23a1 1 0 000-2H8.5a1 1 0 000 2z"></path>
              <circle cx="2.5" cy="11.998" r="2.5"></circle>
              <path d="M23 11H8.5a1 1 0 000 2H23a1 1 0 000-2z"></path>
              <circle cx="2.5" cy="19.998" r="2.5"></circle>
              <path d="M23 19H8.5a1 1 0 000 2H23a1 1 0 000-2z"></path>
            </svg>
          </button>

          <button
              class="p-2 rounded"
              :class="{ 'bg-gray-900': isActive.ordered_list() }"
              @click="commands.ordered_list"
          >
            <svg viewBox="0 0 24 24" class="fill-current w-3 h-3">
              <path d="M7.75 4.5h15a1 1 0 000-2h-15a1 1 0 000 2zm15 6.5h-15a1 1 0 100 2h15a1 1 0 000-2zm0 8.5h-15a1 1 0 000 2h15a1 1 0 000-2zM2.212 17.248a2 2 0 00-1.933 1.484.75.75 0 101.45.386.5.5 0 11.483.63.75.75 0 100 1.5.5.5 0 11-.482.635.75.75 0 10-1.445.4 2 2 0 103.589-1.648.251.251 0 010-.278 2 2 0 00-1.662-3.111zm2.038-6.5a2 2 0 00-4 0 .75.75 0 001.5 0 .5.5 0 011 0 1.031 1.031 0 01-.227.645L.414 14.029A.75.75 0 001 15.248h2.5a.75.75 0 000-1.5h-.419a.249.249 0 01-.195-.406L3.7 12.33a2.544 2.544 0 00.55-1.582zM4 5.248h-.25A.25.25 0 013.5 5V1.623A1.377 1.377 0 002.125.248H1.5a.75.75 0 000 1.5h.25A.25.25 0 012 2v3a.25.25 0 01-.25.25H1.5a.75.75 0 000 1.5H4a.75.75 0 000-1.5z"></path>
            </svg>
          </button>

          <button
              class="p-2 rounded"
              :class="{ 'bg-gray-900': isActive.blockquote() }"
              @click="commands.blockquote"
          >
            <svg viewBox="0 0 24 24" class="fill-current w-3 h-3">
              <path d="M18.559 3.932a4.942 4.942 0 100 9.883 4.609 4.609 0 001.115-.141.25.25 0 01.276.368 6.83 6.83 0 01-5.878 3.523 1.25 1.25 0 000 2.5 9.71 9.71 0 009.428-9.95V8.873a4.947 4.947 0 00-4.941-4.941zm-12.323 0a4.942 4.942 0 000 9.883 4.6 4.6 0 001.115-.141.25.25 0 01.277.368 6.83 6.83 0 01-5.878 3.523 1.25 1.25 0 000 2.5 9.711 9.711 0 009.428-9.95V8.873a4.947 4.947 0 00-4.942-4.941z"></path>
            </svg>
          </button>

          <button
              class="p-2 rounded"
              :class="{ 'bg-gray-900': isActive.code_block() }"
              @click="commands.code_block"
          >
            <svg viewBox="0 0 24 24" class="fill-current w-3 h-3">
              <path d="M9.147 21.552a1.244 1.244 0 01-.895-.378L.84 13.561a2.257 2.257 0 010-3.125l7.412-7.613a1.25 1.25 0 011.791 1.744l-6.9 7.083a.5.5 0 000 .7l6.9 7.082a1.25 1.25 0 01-.9 2.122zm5.707 0a1.25 1.25 0 01-.9-2.122l6.9-7.083a.5.5 0 000-.7l-6.9-7.082a1.25 1.25 0 011.791-1.744l7.411 7.612a2.257 2.257 0 010 3.125l-7.412 7.614a1.244 1.244 0 01-.89.38zm6.514-9.373z"></path>
            </svg>
          </button>

          <button
              class="px-1"
              @click="commands.horizontal_rule"
          >
            <svg viewBox="0 0 24 24" class="fill-current w-3 h-3">
              <path d="M5 13a1 1 0 010-2h14a1 1 0 010 2H5z"></path>
            </svg>
          </button>
        </div>

        <div class="ml-4">
          <button
              class="px-1"
              @click="commands.undo"
          >
            <svg viewBox="0 0 24 24" class="fill-current w-3 h-3">
              <path d="M17.786 3.77a12.542 12.542 0 00-12.965-.865.249.249 0 01-.292-.045L1.937.269A.507.507 0 001.392.16a.5.5 0 00-.308.462v6.7a.5.5 0 00.5.5h6.7a.5.5 0 00.354-.854L6.783 5.115a.253.253 0 01-.068-.228.249.249 0 01.152-.181 10 10 0 019.466 1.1 9.759 9.759 0 01.094 15.809 1.25 1.25 0 001.473 2.016 12.122 12.122 0 005.013-9.961 12.125 12.125 0 00-5.127-9.9z"></path>
            </svg>
          </button>

          <button
              class="w-3 h-3"
              @click="commands.redo"
          >
            <svg viewBox="0 0 24 24" class="fill-current w-3 h-3">
              <path d="M22.608.161a.5.5 0 00-.545.108L19.472 2.86a.25.25 0 01-.292.045 12.537 12.537 0 00-12.966.865A12.259 12.259 0 006.1 23.632a1.25 1.25 0 001.476-2.018 9.759 9.759 0 01.091-15.809 10 10 0 019.466-1.1.25.25 0 01.084.409l-1.85 1.85a.5.5 0 00.354.853h6.7a.5.5 0 00.5-.5V.623a.5.5 0 00-.313-.462z"></path>
            </svg>
          </button>
        </div>

      </div>
    </editor-menu-bar>

    <editor-content class="prose w-full" :editor="editor" v-model="content" />
  </div>
</template>

<script>
import {Editor, EditorContent, EditorMenuBar} from 'tiptap'
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  HorizontalRule,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  Image,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History,
  TrailingNode,
} from 'tiptap-extensions'

export default {
  components: {
    EditorContent,
    EditorMenuBar,
  },
  props: ['value'],
  data() {
    return {
      content: '',
      editor: new Editor({
        extensions: [
          new Blockquote(),
          new BulletList(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({levels: [2, 3]}),
          new HorizontalRule(),
          new ListItem(),
          new OrderedList(),
          new TodoItem(),
          new TodoList(),
          new Link(),
          new Image(),
          new Bold(),
          new Code(),
          new Italic(),
          new Strike(),
          new Underline(),
          new History(),
          new TrailingNode({
            node: 'paragraph',
            notAfter: ['paragraph'],
          }),
        ],
        onUpdate: ({getHTML}) => {
          this.content = getHTML()
          this.$emit('input', this.content)
        },
        content: '',
      }),
    }
  },
  methods: {
    showImagePrompt(command) {
      const src = prompt('Enter the url of your image here')
      if (src !== null) {
        command({src})
      }
    },
  },
  created() {
    this.editor.setContent(this.value)
  },
  beforeDestroy() {
    this.editor.destroy()
  },
}
</script>
<style>
.ProseMirror {
  width: 100%;
  margin-top: -1rem;
}
.prose {
  max-width: none;
}
.ProseMirror > :first-child {
  margin-top: 0;
}
.ProseMirror:focus {
  outline: none;
}
.ProseMirror:focus {
  outline: none;
}
</style>