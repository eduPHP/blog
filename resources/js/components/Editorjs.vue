<template>
  <div class="prose" id="editorjs"></div>
</template>

<script>
import Editor from '@editorjs/editorjs'
import Header from '@editorjs/header'
import List from '@editorjs/list'
import CodeTool from '@editorjs/code'
import Paragraph from '@editorjs/paragraph'
import Embed from '@editorjs/embed'
import Table from '@editorjs/table'
import RawTool from '@editorjs/raw'
import Quote from '@editorjs/quote'
import Delimiter from '@editorjs/delimiter'
import ImageTool from '@editorjs/image'
import InlineImage from 'editorjs-inline-image';

export default {
  props: ['value'],
  data() {
    return {
      editor: null,
      config: {
        tools: {
          header: {
            class: Header,
            config: {
              placeholder: 'Enter a header',
              levels: [2, 3, 4],
              defaultLevel: 3,
            }
          },
          image: {
            class: ImageTool,
            config: {
              uploader: {
                async uploadByFile(file) {
                  function pFileReader(file) {
                    return new Promise((resolve, reject) => {
                      let fr = new FileReader();
                      fr.onload = resolve;  // CHANGE to whatever function you want which would eventually call resolve
                      fr.readAsDataURL(file);
                    });
                  }

                  return await pFileReader(file).then(e => {
                    return {
                      success: 1,
                      file: {
                        url: e.target.result
                      }
                    }
                  })
                }
              }
            }
          },
          list: {
            class: List,
            inlineToolbar: true,
          },
          code: {
            class: CodeTool
          },
          paragraph: {
            class: Paragraph,
          },
          embed: {
            class: Embed,
            config: {
              services: {
                youtube: true,
                coub: true,
                imgur: true
              }
            }
          },
          table: {
            class: Table,
            inlineToolbar: true,
            config: {
              rows: 2,
              cols: 3,
            },
          },
          raw: RawTool,
          quote: {
            class: Quote,
            inlineToolbar: true,
            shortcut: 'CMD+SHIFT+O',
            config: {
              quotePlaceholder: 'Enter a quote',
              captionPlaceholder: 'Quote\'s author',
            },
          },
          delimiter: Delimiter,
        },
        onReady: () => {
          console.log('on ready')
        },
        onChange: ({saver}) => {
          saver.save().then(outputData => {
            this.$emit('input', outputData)
          }).catch((error) => {
            console.log('Saving failed: ', error)
          })
        },
        data: this.value
      },
    };
  },

  methods: {
    onInitialized(editor) {
      console.log(editor)
    },
    processImageUpload(file) {
      console.log(file);
      return {
        url: ''
      }
    }
  },

  created() {
    this.editor = new Editor(this.config)
  }
};
</script>
<style>
.cdx-list--unordered {
   list-style: none;
}

.cdx-list {
  padding-left: 0;
}

.ce-block__content {
  max-width: none;
  margin: auto;
}

.ce-delimiter:before {
  font-size: 18px;
}

</style>