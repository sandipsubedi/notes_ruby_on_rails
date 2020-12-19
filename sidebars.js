module.exports = {
  someSidebar: {
    Main: ['index'],
    Gems: ['gems/retriable'],
    Resources: ['resources/books','resources/conference','resources/online'],
    Rails: ['rails/distinct', 'rails/security', 'rails/session',
            'rails/terminal_commands', 'rails/to_webpacker'],
    Ruby: [{ Blocks: ['ruby/blocks/blocks', 'ruby/blocks/yield'] },
           { Getter_Setter: ['ruby/getter_setter/attr_accessor', 'ruby/getter_setter/attr_reader',
                             'ruby/getter_setter/attr_writer', 'ruby/getter_setter/readme'] },
           { Instance_vs_Class: ['ruby/instance_vs_class/class_method', 'ruby/instance_vs_class/class_variable',
                                 'ruby/instance_vs_class/instance_method', 'ruby/instance_vs_class/instance_variable'] },
                                
           { Loops: ['ruby/loops/each', 'ruby/loops/loop', 'ruby/loops/while'] },
           { Ruby_vs_Java: ['ruby/ruby_vs_java/increment_operators'] }],
    RubyVersionManager: ['mdx'],
  },
};
