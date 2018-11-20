angular.module('starter.controllers', [])

  .controller('TabsCtrl', function ($scope,$ionicPopover,$ionicTabsDelegate) {
    // 打开popover
    $scope.openPopOver = function ($event) {
      if($scope.popover){
        $scope.popover.show($event);
        return;
      }
      $ionicPopover.fromTemplateUrl('templates/tabs-popover.html', {
        scope: $scope
      }).then(function(popover) {
        $scope.popover = popover;
        $scope.popover.show($event);
      });

      // 点击pop弹出框，选中tab，切换tabs的选中状态。并且tabs页面滑动到选中tab的可见视图。
      $scope.choose = function (index) {
        $ionicTabsDelegate.select(index);
        $scope.popover.hide();
        document.getElementById('tabScroll').scrollLeft = (index * 80);

      }

    }

    // 关闭popover
    $scope.closePop = function(){
      $scope.popover.hide()
    }
    //Cleanup the popover when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.popover.remove();

    });
    // 设置tabs的id
    $scope.tabScroll = 'tabScroll';

  })

  .controller('DashCtrl', function ($scope) {})

  .controller('ChatsCtrl', function ($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.chats = Chats.all();
    $scope.remove = function (chat) {
      Chats.remove(chat);
    };
  })

  .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
  })

  .controller('AccountCtrl', function ($scope) {
    $scope.settings = {
      enableFriends: true
    };
  })


  .controller('UserCtrl', function ($scope) {
    $scope.settings = {
      enableFriends: true
    };
  })


  .controller('HomeCtrl', function ($scope) {
    $scope.settings = {
      enableFriends: true
    };
  });
